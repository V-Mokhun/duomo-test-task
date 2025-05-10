import * as paymentsController from "@/modules/payments/payments.controller";
import * as paymentsService from "@/modules/payments/payments.service";
import { CARD_ERROR_CODES } from "@/modules/payments/payments.types";
import { afterEach, describe, expect, it, jest } from "@jest/globals";

const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("validateCard", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 and valid:true for valid card", () => {
    jest
      .spyOn(paymentsService, "validateCard")
      .mockReturnValue({ valid: true });
    const req = {
      body: {
        cardNumber: "4111111111111111",
        expirationMonth: "12",
        expirationYear: "30",
      },
    } as any;
    const res = mockResponse();
    paymentsController.validateCard(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ valid: true });
  });

  it("should return 400 if required fields are missing", () => {
    const req = {
      body: { cardNumber: "", expirationMonth: "", expirationYear: "" },
    } as any;
    const res = mockResponse();
    paymentsController.validateCard(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ valid: false, error: expect.any(Object) })
    );
  });

  it("should return 200 and error for invalid card", () => {
    jest.spyOn(paymentsService, "validateCard").mockReturnValue({
      valid: false,
      error: {
        code: CARD_ERROR_CODES.INVALID_CARD_NUMBER.code,
        message: CARD_ERROR_CODES.INVALID_CARD_NUMBER.message,
      },
    });
    const req = {
      body: { cardNumber: "123", expirationMonth: "12", expirationYear: "30" },
    } as any;
    const res = mockResponse();
    paymentsController.validateCard(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      valid: false,
      error: {
        code: CARD_ERROR_CODES.INVALID_CARD_NUMBER.code,
        message: CARD_ERROR_CODES.INVALID_CARD_NUMBER.message,
      },
    });
  });

  it("should return 500 on unexpected error", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(paymentsService, "validateCard").mockImplementation(() => {
      throw new Error("fail");
    });
    const req = {
      body: {
        cardNumber: "4111111111111111",
        expirationMonth: "12",
        expirationYear: "30",
      },
    } as any;
    const res = mockResponse();
    paymentsController.validateCard(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ valid: false, error: expect.any(Object) })
    );
  });
});
