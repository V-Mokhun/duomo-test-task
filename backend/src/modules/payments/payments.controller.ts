import { Request, Response } from "express";
import * as paymentsService from "./payments.service";
import { CardRequest } from "./payments.types";

export const validateCard = (req: Request, res: Response): void => {
  try {
    const { cardNumber, expirationMonth, expirationYear } =
      req.body as CardRequest;

    if (!cardNumber || !expirationMonth || !expirationYear) {
      res.status(400).json({
        valid: false,
        error: {
          code: "400",
          message: "Missing required fields",
        },
      });
      return;
    }

    const validationResult = paymentsService.validateCard({
      cardNumber,
      expirationMonth,
      expirationYear,
    });

    res.status(200).json(validationResult);
  } catch (error) {
    console.error("Error validating card:", error);
    res.status(500).json({
      valid: false,
      error: {
        code: "500",
        message: "Internal server error",
      },
    });
  }
};
