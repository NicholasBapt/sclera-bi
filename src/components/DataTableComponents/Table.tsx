import { cva, type VariantProps } from "class-variance-authority";

export const tableVariants = cva("w-full border-collapse text-left", {
  variants: {
    variant: {
      primary: "rounded",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface TableProps
  extends VariantProps<typeof tableVariants>, React.ComponentProps<"table"> {}

export default function Table({
  variant,
  className,
  children,
  ...props
}: TableProps) {
  return (
    <table className={tableVariants({ variant, className })} {...props}>
      {children}
    </table>
  );
}
