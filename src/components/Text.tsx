import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans text-white", {
  variants: {
    variant: {
      "heading-lg": "text-3xl font-semibold",
      "heading-lg-regular": "text-3xl",
      "heading-sm": "text-lg font-semibold",
      "body-md": "text-base leading-6",
      "body-md-bold": "text-base leading-6 font-semibold",
      "body-sm": "text-sm leading-5",
      "body-sm-bold": "text-sm leading-5 font-semibold",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
