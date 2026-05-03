import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-white",
      sidebar: "fill-blue-light group-hover:fill-white",
      header: "fill-blue-dark group-hover:fill-white",
      pagination: "fill-white",
    },
    size: {
      md: "w-6 h-6",
      sm: "w-5 h-5",
      xsm: "w-3 h-3",
    },
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    animate: false,
  },
});

interface IconProps
  extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  variant,
  size,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={iconVariants({ variant, size, animate, className })}
      {...props}
    />
  );
}
