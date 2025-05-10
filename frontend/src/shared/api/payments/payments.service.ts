import type { CardRequest, CardResponse } from "./payments.types";

export class PaymentsService {
  private readonly baseUrl = `${import.meta.env.VITE_API_URL}/payments`;

  async validateCard(card: CardRequest) {
    const response = await fetch(`${this.baseUrl}/card`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });

    if (!response.ok) {
      throw new Error("Failed to validate card");
    }

    return response.json() as Promise<CardResponse>;
  }
}

export const paymentsService = new PaymentsService();
