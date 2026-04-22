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
      },
      size: {
        md: "h-14 p-4",
        sm: "h-10 px-3 p-2",
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

export const iconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-white",
      sidebar: "fill-blue-light group-hover:fill-white",
    },
    size: {
      md: "w-6 h-6",
      sm: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const tooltipVariants = cva(
  "absolute w-auto p-2 m-2 min-w-max left-16 rounded-md shadow-md text-white bg-blue-base text-xs font-bold transition-all duration-300 scale-0 group-hover:scale-100 origin-left",
  {
    variants: {
      variant: {
        primary: "text-white",
        sidebar: "",
      },
    },
    defaultVariants: {
      variant: "primary",
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
        <Icon svg={IconComponent} className={iconVariants({ variant, size })} />
      )}
      {tooltip && (
        <Tooltip text={tooltip} className={tooltipVariants({ className })} />
      )}
    </button>
  );
}
