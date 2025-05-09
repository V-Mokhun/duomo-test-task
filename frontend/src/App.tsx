import { ArrowLeft, InfoIcon } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Icon } from "@/shared/ui";

export function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "");
    if (value.length <= 16 && /^\d*$/.test(value)) {
      const formatted = value.replace(/(.{4})/g, "$1 ").trim();
      setCardNumber(formatted);
    }
  };

  return (
    <>
      <header className="py-2">
        <div className="lg:max-w-4xl mx-auto px-4 xs:px-3.5 lg:px-3">
          <div className="flex justify-between lg:justify-end items-center gap-2">
            <button type="button" className="lg:hidden p-2">
              <ArrowLeft className="text-black h-5 w-5" />
            </button>
            <h1 className="text-lg font-semibold lg:hidden">Checkout</h1>
            <div className="flex items-center text-sm lg:text-base">
              <a
                href="#"
                className="text-tertiary hover:underline font-medium p-2 hidden lg:block"
              >
                Eng
              </a>
              <a href="#" className="hover:underline font-medium p-2">
                Укр
              </a>
            </div>
          </div>
        </div>
      </header>
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

              <button
                type="button"
                className="w-full bg-black hover:bg-black/80 transition-colors text-white py-3 rounded flex items-center justify-center mb-6 cursor-pointer"
              >
                <Icon id="apple-pay" className="w-12 h-5" />
              </button>

              <div className="relative flex items-center mt-6 mb-4">
                <div className="flex-grow border-t border-divider"></div>
                <span className="flex-shrink mx-4 text-foreground-secondary text-sm">
                  or pay with card
                </span>
                <div className="flex-grow border-t border-divider"></div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block text-xs font-medium text-foreground-secondary mb-1"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 1234 1234 1234"
                    className="w-full px-3 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label
                      htmlFor="expiryDate"
                      className="block text-xs font-medium text-foreground-secondary mb-1"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/YY"
                      className="w-full px-3 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="cvc"
                      className="block text-xs font-medium text-foreground-secondary mb-1"
                    >
                      CVC
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="cvc"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        placeholder="•••"
                        className="w-full px-3 py-2.5 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-tertiary">
                        <InfoIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-primary-hover active:bg-primary-active transition-colors text-white py-3 px-4 rounded-md font-medium mb-2 cursor-pointer">
                  <span className="hidden lg:inline">Pay 299.99 UAH</span>
                  <span className="lg:hidden">Start Trial</span>
                </button>

                <div className="py-3 px-4 rounded-lg border border-divider text-xs lg:text-sm text-foreground-secondary">
                  <p>
                    You&apos;ll have your{" "}
                    <span className="font-semibold">Plan Pro</span> during 1
                    year. After this period of time, your plan will be{" "}
                    <span className="font-semibold">automatically renewed</span>{" "}
                    with its original price without any discounts applied.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background-secondary p-3 pt-4 lg:p-8 rounded-lg">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-lg font-semibold">
                  Order info &lt;= 100 char.
                </h2>

                <div className="space-y-4">
                  <p className="font-medium text-sm">
                    Description &lt;= 400 char.
                  </p>

                  <div className="border-t border-b border-border py-4">
                    <div className="space-y-1">
                      <h3 className="font-medium text-sm">
                        Lamel Professional Smart Skin Compact Powder
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        Пудра для обличчя
                      </p>
                    </div>
                  </div>

                  <div className="text-right font-medium xs:hidden">
                    <span className="text-sm hidden lg:inline">Total </span>
                    <span className="font-semibold">299.99 UAH</span>
                    <span className="xs:hidden">/&nbsp;month</span>
                  </div>

                  <div className="hidden xs:block lg:hidden text-right">
                    <p className="font-semibold">5 days free</p>
                    <p className="text-sm">then 299.99 UAH per 14 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="pt-8 pb-10">
        <div className="max-w-4xl mx-auto px-4 xs:px-3 lg:px-3">
          <p className="text-center text-foreground-secondary text-sm font-medium">
            Powered by <span className="font-bold">DUOMO</span>
          </p>
        </div>
      </footer>
    </>
  );
}
