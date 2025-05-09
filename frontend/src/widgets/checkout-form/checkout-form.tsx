import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { checkoutFormSchema, type CheckoutFormSchema } from "./schema";

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormSchema) => void;
}

export const CheckoutForm = ({ onSubmit }: CheckoutFormProps) => {
  const form = useForm<CheckoutFormSchema>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mb-4">
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <Input placeholder="1234 1234 1234 1234" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expiration Date</FormLabel>
                <FormControl>
                  <Input placeholder="MM/YY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cvc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CVC</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="•••" {...field} />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-tertiary">
                      <InfoIcon className="h-5 w-5" />
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-hover active:bg-primary-active transition-colors text-white py-3 px-4 rounded-md font-medium mb-2 cursor-pointer"
        >
          <span className="hidden lg:inline">Pay 299.99 UAH</span>
          <span className="lg:hidden">Start Trial</span>
        </button>
      </form>
    </Form>
  );
};
