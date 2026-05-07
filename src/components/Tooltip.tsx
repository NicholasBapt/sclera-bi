import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const tooltipVariants = cva(
  "absolute w-auto p-2 m-2 min-w-max left-16 rounded-md shadow-md text-xs font-bold transition-all duration-300 scale-0 group-hover:scale-100 origin-left",
  {
    variants: {
      variant: {
        primary: "text-white bg-blue-base",
        sidebar: "text-white bg-blue-base",
        header: "text-white bg-blue-base",
        chartPagination: "",
      },
      animate: {
        false: "",
        true: "animate-spin",
      },
    },
    defaultVariants: {
      variant: "primary",
      animate: false,
    },
  },
);

interface TooltipProps
  extends React.ComponentProps<"span">, VariantProps<typeof tooltipVariants> {
  text: React.ReactNode;
}

export default function Tooltip({
  variant,
  className,
  text,
  ...props
}: TooltipProps) {
  return (
    <span className={tooltipVariants({ variant, className })} {...props}>
      {text}
    </span>
  );
}
