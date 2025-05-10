import * as paymentsService from "./payments.service";
import { CARD_ERROR_CODES } from "./payments.types";
import { describe, expect, it } from "@jest/globals";

describe("validateCard", () => {
  it("returns valid: true for a valid card", () => {
    const result = paymentsService.validateCard({
      cardNumber: "4111111111111111",
      expirationMonth: "12",
      expirationYear: "30",
    });
    expect(result).toEqual({ valid: true });
  });

  it("returns error for invalid card number", () => {
    const result = paymentsService.validateCard({
      cardNumber: "1234567890123456",
      expirationMonth: "12",
      expirationYear: "30",
    });
    expect(result).toEqual({
      valid: false,
      error: {
        code: CARD_ERROR_CODES.INVALID_CARD_NUMBER.code,
        message: CARD_ERROR_CODES.INVALID_CARD_NUMBER.message,
      },
    });
  });

  it("returns error for invalid expiration date", () => {
    const result = paymentsService.validateCard({
      cardNumber: "4111111111111111",
      expirationMonth: "",
      expirationYear: "",
    });
    expect(result).toEqual({
      valid: false,
      error: {
        code: CARD_ERROR_CODES.INVALID_EXPIRATION_DATE.code,
        message: CARD_ERROR_CODES.INVALID_EXPIRATION_DATE.message,
      },
    });
  });

  it("returns error for expired card", () => {
    const result = paymentsService.validateCard({
      cardNumber: "4111111111111111",
      expirationMonth: "01",
      expirationYear: "20",
    });
    expect(result).toEqual({
      valid: false,
      error: {
        code: CARD_ERROR_CODES.INVALID_EXPIRATION_DATE.code,
        message: CARD_ERROR_CODES.INVALID_EXPIRATION_DATE.message,
      },
    });
  });
});
