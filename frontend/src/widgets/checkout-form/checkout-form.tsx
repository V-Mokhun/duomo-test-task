import {
  Button,
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
import { InfoIcon, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { checkoutFormSchema, type CheckoutFormSchema } from "./schema";

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormSchema, resetForm: () => void) => void;
  isLoading?: boolean;
}

export const CheckoutForm = ({ onSubmit, isLoading }: CheckoutFormProps) => {
  const form = useForm<CheckoutFormSchema>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
  });

  const handleSubmit = (data: CheckoutFormSchema) => {
    onSubmit(data, form.reset);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-3 mb-2"
      >
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col h-full">
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <InputMask
                  mask="____ ____ ____ ____"
                  replacement={{ _: /\d/ }}
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
              <FormItem className="flex flex-col h-full">
                <FormLabel>Expiration Date</FormLabel>
                <FormControl>
                  <InputMask
                    mask="__/__"
                    replacement={{ _: /\d/ }}
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
              <FormItem className="flex flex-col h-full">
                <FormLabel>CVC</FormLabel>
                <FormControl>
                  <div className="relative">
                    <InputMask
                      type="password"
                      mask="___"
                      replacement={{ _: /\d/ }}
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

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin inline-flex items-center justify-center mr-2" />
          ) : null}
          <span className="hidden lg:inline">Pay 299.99 UAH</span>
          <span className="lg:hidden">Start Trial</span>
        </Button>
      </form>
    </Form>
  );
};
