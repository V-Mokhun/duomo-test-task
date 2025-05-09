import * as React from "react";

import { cn } from "@/shared/lib";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full px-3 py-2.5 border border-border rounded-md disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
