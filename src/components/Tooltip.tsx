import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const tooltipVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface TooltipProps
  extends React.ComponentProps<"span">, VariantProps<typeof tooltipVariants> {
  text: React.ReactNode;
}

export default function Tooltip({ className, text, ...props }: TooltipProps) {
  return (
    <span className={tooltipVariants({ className })} {...props}>
      {text}
    </span>
  );
}
