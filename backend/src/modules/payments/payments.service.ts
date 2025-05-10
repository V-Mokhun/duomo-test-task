import { CardRequest, CardResponse, CARD_ERROR_CODES } from "./payments.types";
import cardValidator from "card-validator";

export const validateCard = (card: CardRequest): CardResponse => {
  const numberValidation = cardValidator.number(card.cardNumber);
  if (!numberValidation.isValid) {
    return {
      valid: false,
      error: {
        code: CARD_ERROR_CODES.INVALID_CARD_NUMBER,
        message: "Invalid card number",
      },
    };
  }

  const expirationValidation = cardValidator.expirationDate({
    month: card.expirationMonth,
    year: card.expirationYear,
  });

  if (!expirationValidation.month || !expirationValidation.year) {
    return {
      valid: false,
      error: {
        code: CARD_ERROR_CODES.INVALID_EXPIRATION_DATE,
        message: "Invalid expiration date",
      },
    };
  }

  if (!expirationValidation.isValid) {
    return {
      valid: false,
      error: {
        code: CARD_ERROR_CODES.EXPIRED_CARD,
        message: "Card has expired",
      },
    };
  }

  return {
    valid: true,
  };
};
