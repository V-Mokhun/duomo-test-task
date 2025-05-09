import { ApplePayButton } from "@/shared/ui";
import { ArrowLeft } from "lucide-react";
import { CheckoutForm, Footer, Header, OrderInfo } from "./widgets";
import type { CheckoutFormSchema } from "./widgets";

export function App() {
  const handleSubmit = (data: CheckoutFormSchema) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <main className="grow mt-2 lg:mt-0">
        <div className="max-w-md lg:max-w-4xl mx-auto px-4 xs:px-3.5 lg:px-3">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-8 items-start">
            <div className="">
              <div className="mb-6">
                <a href="#" className="lg:block mb-4 relative hidden">
                  <ArrowLeft className="text-black absolute -left-6 h-5 w-5 top-1/2 -translate-y-1/2" />
                  <h1 className="text-lg font-semibold">Checkout</h1>
                </a>

                <h2 className="text-2xl lg:text-3xl font-semibold text-center lg:text-left">
                  5 days free
                </h2>
                <p className="font-medium text-center text-sm lg:text-base lg:text-left">
                  then 299.99 UAH per 14 days
                </p>
              </div>

              <ApplePayButton />

              <div className="relative flex items-center mt-6 mb-4">
                <div className="flex-grow border-t border-divider"></div>
                <span className="flex-shrink mx-4 text-foreground-secondary text-sm">
                  or pay with card
                </span>
                <div className="flex-grow border-t border-divider"></div>
              </div>

              <CheckoutForm onSubmit={handleSubmit} />

              <div className="py-3 px-4 rounded-lg border border-divider text-xs lg:text-sm text-foreground-secondary">
                <p>
                  You&apos;ll have your{" "}
                  <span className="font-semibold">Plan Pro</span> during 1 year.
                  After this period of time, your plan will be{" "}
                  <span className="font-semibold">automatically renewed</span>{" "}
                  with its original price without any discounts applied.
                </p>
              </div>
            </div>

            <OrderInfo />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
