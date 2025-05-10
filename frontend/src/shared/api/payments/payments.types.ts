export type CardResponse = {
  valid: boolean;
  error?: {
    code: string;
    message: string;
  };
};

export type CardRequest = {
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
};
