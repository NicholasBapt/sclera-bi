import { cva, type VariantProps } from "class-variance-authority";

export const theadVariants = cva("", {
  variants: {
    variant: {
      primary: "bg-cloudy-base",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface TheadProps
  extends VariantProps<typeof theadVariants>, React.ComponentProps<"thead"> {}

export default function Thead({
  variant,
  className,
  children,
  ...props
}: TheadProps) {
  return (
    <thead className={theadVariants({ variant, className })} {...props}>
      {children}
    </thead>
  );
}
