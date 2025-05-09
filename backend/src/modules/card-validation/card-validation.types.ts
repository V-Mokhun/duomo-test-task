export interface CardValidationRequest {
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
}

export interface ValidationError {
  code: string;
  message: string;
}

export interface CardValidationResponse {
  valid: boolean;
  error?: ValidationError;
}

export const CARD_VALIDATION_ERROR_CODES = {
  INVALID_CARD_NUMBER: "001",
  INVALID_EXPIRATION_DATE: "002",
  EXPIRED_CARD: "003",
} as const;
