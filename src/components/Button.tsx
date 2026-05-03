import React from "react";
import Icon from "./Icon";
import Text from "./Text";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  `
    flex items-center justify-center cursor-pointer
    transition rounded-lg group gap-2
    `,
  {
    variants: {
      variant: {
        primary: "bg-blue-base hover:bg-blue-dark active:bg-cloudy-light",
        sidebar: "bg-blue-dark hover:bg-blue-base w-full justify-start",
        pagination:
          "bg-cloudy-light hover:bg-cloudy-base active:bg-blue-dark border-blue-light border",
      },
      size: {
        md: "h-14 py-4 px-5",
        sm: "h-10 px-3 p-2",
        xsm: "h-6 px-2 p-2",
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

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-white",
      sidebar: "text-white text-start",
      pagination: "text-white",
    },
    size: {
      md: "text-[16px]",
      sm: "text-[14px]",
      xsm: "text-[12px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  border,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, border, className })}
      {...props}
    >
      {IconComponent && (
        <Icon svg={IconComponent} variant={variant} size={size} />
      )}
      <Text className={buttonTextVariants({ variant, size })}>{children}</Text>
    </button>
  );
}
