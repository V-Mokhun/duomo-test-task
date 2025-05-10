export interface CardRequest {
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
}

export interface ValidationError {
  code: string;
  message: string;
}

export interface CardResponse {
  valid: boolean;
  error?: ValidationError;
}

export const CARD_ERROR_CODES = {
  INVALID_CARD_NUMBER: {
    code: "001",
    message: "Invalid card number",
  },
  INVALID_EXPIRATION_DATE: {
    code: "002",
    message: "Invalid expiration date",
  },
  EXPIRED_CARD: {
    code: "003",
    message: "Card has expired",
  },
} as const;
