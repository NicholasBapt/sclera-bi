import { cva, type VariantProps } from "class-variance-authority";

export const tableRowVariants = cva("", {
  variants: {
    variant: {
      primary: "odd:bg even:bg-cloudy-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface TableRowProps
  extends VariantProps<typeof tableRowVariants>, React.ComponentProps<"tr"> {}

export default function TableRow({
  variant,
  className,
  children,
  ...props
}: TableRowProps) {
  return (
    <tr className={tableRowVariants({ variant, className })} {...props}>
      {children}
    </tr>
  );
}
