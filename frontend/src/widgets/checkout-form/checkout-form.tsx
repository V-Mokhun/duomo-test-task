import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { InputMask } from "@react-input/mask";
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mb-2">
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <InputMask
                  mask="0000 0000 0000 0000"
                  replacement={{ 0: /\d/ }}
                  placeholder="1234 1234 1234 1234"
                  {...field}
                  component={Input}
                />
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
                  <InputMask
                    mask="00/00"
                    replacement={{ 0: /\d/ }}
                    placeholder="MM/YY"
                    {...field}
                    component={Input}
                  />
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
                    <InputMask
                      mask="000"
                      replacement={{ 0: /\d/ }}
                      placeholder="•••"
                      {...field}
                      component={Input}
                    />
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
          className="w-full bg-primary hover:bg-primary-hover active:bg-primary-active transition-colors text-white py-3 px-4 rounded-md font-medium cursor-pointer"
        >
          <span className="hidden lg:inline">Pay 299.99 UAH</span>
          <span className="lg:hidden">Start Trial</span>
        </button>
      </form>
    </Form>
  );
};
