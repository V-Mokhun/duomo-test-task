import { z } from "zod";

export const checkoutFormSchema = z.object({
  cardNumber: z.string().refine(
    (val) => {
      return val.replace(/\s/g, "").length === 16;
    },
    {
      message: "Invalid card number",
    }
  ),
  expiryDate: z
    .string()
    .refine(
      (val) => {
        return val.replace(/\s/g, "").length === 5;
      },
      {
        message: "Invalid expiry date",
      }
    )
    .refine(
      (val) => {
        const [month, year] = val.split("/");
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;

        if (parseInt(month) > 12 || parseInt(month) < 1) {
          return false;
        }

        if (parseInt(year) < currentYear) {
          return false;
        }

        if (parseInt(year) === currentYear && parseInt(month) < currentMonth) {
          return false;
        }

        return true;
      },
      {
        message: "Invalid expiry date",
      }
    ),
  cvc: z.string().refine(
    (val) => {
      return val.replace(/\s/g, "").length === 3;
    },
    {
      message: "Invalid CVC",
    }
  ),
});

export type CheckoutFormSchema = z.infer<typeof checkoutFormSchema>;
