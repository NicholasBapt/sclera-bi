import { cva, type VariantProps } from "class-variance-authority";

export const textInputVariants = cva(
  "w-full rounded-lg border px-3 py-2 text-sm outline-none transition",
  {
    variants: {
      variant: {
        primary:
          "bg-cloudy-base focus:bg-cloudy-light border-blue-light text-blue-light",
      },
      size: {
        md: "h-10",
        sm: "h-8 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface TextInputProps
  extends
    Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof textInputVariants> {}

export default function TextInput({
  variant,
  size,
  className,
  disabled,
  ...props
}: TextInputProps) {
  return (
    <input
      disabled={disabled}
      className={textInputVariants({ variant, size, className })}
      {...props}
    />
  );
}
