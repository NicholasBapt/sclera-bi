import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const inputCheckboxWrapperVariants = cva(
  `inline-flex justify-center items-center relative group`,
);

export const inputCheckboxVariants = cva(
  `
    appearance-none peer flex items-center justify-center cursor-pointer
    transition overflow-hidden relative
    `,
  {
    variants: {
      variant: {
        none: "",
        default: `border border-solid
        border-blue-light hover:bg-blue-light/20
        checked:bg-blue-dark
        group-hover:checked:bg-blue-dark20
        `,
      },
      size: {
        md: "w-4 h-4 rounded-sm",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      disabled: false,
    },
  },
);

export const inputCheckboxCheckVariants = cva(
  `
    pointer-events-none absolute
    opacity-0 peer-checked:opacity-100
    transition rounded-2xl bg-blue-light
  `,
  {
    variants: {
      size: {
        md: "h-2 w-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface InputCheckboxProps
  extends
    VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  loading?: boolean;
}

export default function InputCheckbox({
  variant,
  size,
  disabled,
  className,
  ...props
}: InputCheckboxProps) {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ variant, size, disabled })}
        {...props}
      />
      <div className={inputCheckboxCheckVariants({ size })} />
    </label>
  );
}
