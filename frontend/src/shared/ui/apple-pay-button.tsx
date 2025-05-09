import { cn } from "@/shared/lib";
import { Icon } from "./base";

interface ApplePayButtonProps {
  className?: string;
}

export const ApplePayButton = ({ className }: ApplePayButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "w-full bg-black hover:bg-black/80 transition-colors text-white py-3 rounded flex items-center justify-center mb-6 cursor-pointer",
        className
      )}
    >
      <Icon id="apple-pay" className="w-12 h-5" />
    </button>
  );
};
