import { CardRequest, CardResponse, CARD_ERROR_CODES } from "./payments.types";
import cardValidator from "card-validator";

export const validateCard = (card: CardRequest): CardResponse => {
  const numberValidation = cardValidator.number(card.cardNumber);
  if (!numberValidation.isValid) {
    return {
      valid: false,
      error: {
        code: CARD_ERROR_CODES.INVALID_CARD_NUMBER.code,
        message: CARD_ERROR_CODES.INVALID_CARD_NUMBER.message,
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
        code: CARD_ERROR_CODES.INVALID_EXPIRATION_DATE.code,
        message: CARD_ERROR_CODES.INVALID_EXPIRATION_DATE.message,
      },
    };
  }

  if (!expirationValidation.isValid) {
    return {
      valid: false,
      error: {
        code: CARD_ERROR_CODES.EXPIRED_CARD.code,
        message: CARD_ERROR_CODES.EXPIRED_CARD.message,
      },
    };
  }

  return {
    valid: true,
  };
};
