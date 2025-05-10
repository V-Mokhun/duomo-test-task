import { cn } from "@/shared/lib";
import { Icon } from "./base";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ApplePayButtonProps {
  className?: string;
}

export const ApplePayButton = ({ className }: ApplePayButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast.success("Apple Pay payment successful!");
  };

  return (
    <button
      type="button"
      className={cn(
        "w-full bg-black hover:bg-black/80 transition-colors text-white py-3 rounded flex items-center justify-center mb-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin mr-2" />
          <span>Processing...</span>
        </>
      ) : (
        <Icon id="apple-pay" className="w-12 h-5" />
      )}
    </button>
  );
};
