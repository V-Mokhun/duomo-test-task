import { ArrowLeft } from "lucide-react";

export const Header = () => {
  return (
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
  );
};
