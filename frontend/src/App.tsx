import type React from "react";
import { useState } from "react";
import { ArrowLeft, HelpCircle } from "lucide-react";

export function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  // Format card number with spaces
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
        <div className="max-w-4xl mx-auto px-3">
          <div className="flex justify-end items-center">
            <a href="#" className="text-tertiary font-medium p-2">
              Eng
            </a>
            <a href="#" className="font-medium p-2">
              Укр
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-3">
        {/* Main content */}
        <div className="lg:grid lg:grid-cols-2 gap-8">
          {/* Left column - Payment form */}
          <div className="p-6 lg:p-8">
            {/* Back button and title */}
            <div className="mb-8">
              <a
                href="#"
                className="inline-flex items-center text-gray-700 mb-6"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                <span className="text-xl font-medium">Checkout</span>
              </a>

              <h1 className="text-3xl font-bold text-gray-800">5 days free</h1>
              <p className="text-gray-600">then 299.99 UAH per 14 days</p>
            </div>

            {/* Apple Pay button */}
            <button className="w-full bg-black text-white py-3 rounded flex items-center justify-center mb-6">
              <svg
                className="w-5 h-5"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 179.42 179.421"
              >
                <g>
                  <path
                    d="M153.308,126.087c-18.585-8.448-13-33.04-0.921-45.989c0.216-0.232,0.396-0.469,0.551-0.708
		c2.231,2.382,6.34-0.462,4.842-3.773c-5.59-12.356-16.333-22.499-30.293-23.993c-12.48-1.335-27.163,3.544-33.116,15.351
		c-8.842-10.425-23.01-14.219-36.277-14.425c-6.673-0.103-17.061,1.974-21.646,7.706C-4.211,71.833,39.3,223.314,94.924,166.861
		c9.013,9.184,19.938,15.239,32.905,9.052c15.161-7.232,24.265-30.219,30.674-44.33
		C160.221,127.802,156.246,124.561,153.308,126.087z M119.199,60.366c-1.048,0.694-1.72,1.871-1.885,3.158
		c-1.03-0.421-2.06-0.83-3.09-1.288c-0.221-0.098-0.437-0.16-0.651-0.226C115.298,61.253,117.173,60.718,119.199,60.366z
		 M45.895,152.278c1.692,1.829,3.41,3.569,5.155,5.182c2.1,2.312,4.223,4.604,6.352,6.889
		C53.094,161.42,49.256,157.213,45.895,152.278z"
                  />
                  <path
                    d="M115.632,2.104c-1.767-3.518-6.114-2.164-7.33,0.692c-7.857-1.254-13.025,10.603-15.434,16.197
		c-3.925,9.12-5.836,19.445-2.402,28.819c-0.953,2.298,0.667,5.442,3.747,4.499C115.576,45.773,125.625,22.017,115.632,2.104z"
                  />
                </g>
              </svg>
              Pay
            </button>

            {/* Divider */}
            <div className="relative flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500">
                or pay with card
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Card form */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="1234 1234 1234 1234"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="expiryDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <HelpCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Pay button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium mt-4">
                {/* Conditionally show "Pay 299.99 UAH" or "Start Trial" based on screen size */}
                <span className="hidden lg:inline">Pay 299.99 UAH</span>
                <span className="lg:hidden">Start Trial</span>
              </button>

              {/* Subscription info */}
              <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-sm text-gray-600">
                <p>
                  You&apos;ll have your{" "}
                  <span className="font-medium">Plan Pro during 1 year</span>.
                  After this period of time, your plan will be{" "}
                  <span className="font-medium">automatically renewed</span>{" "}
                  with its original price without any discounts applied.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Order summary */}
          <div className="bg-gray-50 p-3 pt-4 lg:p-8">
            <div className="lg:max-w-md lg:ml-auto">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-medium text-gray-800">
                    Order info &lt;= 100 char.
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Description &lt;= 400 char.
                  </p>
                </div>

                <div className="border-t border-b border-gray-200 py-4">
                  <div className="space-y-1">
                    <h3 className="font-medium text-gray-800">
                      Lamel Professional Smart Skin Compact Powder
                    </h3>
                    <p className="text-gray-500">Пудра для обличчя</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium md:hidden">
                    Total
                  </span>
                  <span className="text-xl font-medium text-gray-800">
                    <span className="hidden md:inline">Total </span>
                    299.99 UAH
                    <span className="text-gray-600 text-base ml-1 hidden sm:inline">
                      /&nbsp;month
                    </span>
                  </span>
                </div>

                {/* Mobile-only duplicate of free trial info */}
                <div className="md:hidden border-t border-gray-200 pt-4">
                  <p className="font-medium text-gray-800">5 days free</p>
                  <p className="text-gray-600">then 299.99 UAH per 14 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="p-6 text-center text-gray-500 border-t border-gray-200">
        Powered by <span className="font-medium text-gray-700">DUOMO</span>
      </footer>
    </>
  );
}
