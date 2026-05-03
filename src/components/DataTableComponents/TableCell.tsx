import { cva, type VariantProps } from "class-variance-authority";

export const tableCellVariants = cva("", {
  variants: {
    variant: {
      primary: "text-white px-2 py-1 text-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface TableCellProps
  extends VariantProps<typeof tableCellVariants>, React.ComponentProps<"td"> {}

export default function TableCell({
  variant,
  className,
  children,
  ...props
}: TableCellProps) {
  return (
    <td className={tableCellVariants({ variant, className })} {...props}>
      {children}
    </td>
  );
}
