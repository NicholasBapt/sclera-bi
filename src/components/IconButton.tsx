import React from "react";
import Icon from "./Icon";
import { cva, type VariantProps } from "class-variance-authority";
import Tooltip from "./Tooltip";

export const buttonIconVariants = cva(
  `
    flex items-center justify-center cursor-pointer
    transition-all group duration-300 ease-linear
    `,
  {
    variants: {
      variant: {
        primary: "bg-blue-base hover:bg-blue-dark",
        sidebar:
          "relative h-12 mx-auto bg-blue-dark hover:bg-blue-base active:bg-blue-light w-full hover:text-white rounded-4xl hover:rounded",
        header:
          "mx-auto bg-blue-light hover:bg-blue-base active:bg-blue-light w-full hover:text-white rounded-4xl",
        chartPagination: "",
      },
      size: {
        md: "h-14 w-14 p-4",
        sm: "h-9 w-9 p-2",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
      border: {
        true: "border border-blue-light",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
      border: false,
    },
  },
);

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonIconVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  text?: React.ComponentProps<typeof Tooltip>["text"];
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon: IconComponent,
  text: tooltip,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      {IconComponent && (
        <Icon svg={IconComponent} variant={variant} size={size} />
      )}
      {tooltip && <Tooltip text={tooltip} variant={variant} />}
    </button>
  );
}
