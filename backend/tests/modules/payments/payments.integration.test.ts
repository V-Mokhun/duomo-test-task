import request from "supertest";
import { app } from "@/app";
import { describe, it, expect } from "@jest/globals";

describe("POST /api/payments/card", () => {
  it("should return 200 and valid:true for a valid card", async () => {
    const res = await request(app).post("/api/payments/card").send({
      cardNumber: "4111111111111111",
      expirationMonth: "12",
      expirationYear: "30",
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ valid: true });
  });

  it("should return 400 for missing fields", async () => {
    const res = await request(app).post("/api/payments/card").send({});
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  it("should return 200 and error for invalid card", async () => {
    const res = await request(app).post("/api/payments/card").send({
      cardNumber: "123",
      expirationMonth: "12",
      expirationYear: "30",
    });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("error");
    expect(res.body.valid).toBe(false);
  });

  it("should return 200 and error for expired card", async () => {
    const res = await request(app).post("/api/payments/card").send({
      cardNumber: "4111111111111111",
      expirationMonth: "01",
      expirationYear: "20",
    });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("error");
    expect(res.body.valid).toBe(false);
  });
});
