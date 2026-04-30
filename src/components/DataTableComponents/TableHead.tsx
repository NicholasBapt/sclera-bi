import { cva, type VariantProps } from "class-variance-authority";

export const tableHeadVariants = cva("", {
  variants: {
    variant: {
      primary: "bg-blue-base text-white px-2 py-1 text-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface TableHeadProps
  extends VariantProps<typeof tableHeadVariants>, React.ComponentProps<"th"> {}

export default function TableHead({
  variant,
  className,
  children,
  ...props
}: TableHeadProps) {
  return (
    <th className={tableHeadVariants({ variant, className })} {...props}>
      {children}
    </th>
  );
}
