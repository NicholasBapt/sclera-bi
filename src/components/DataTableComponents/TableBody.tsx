import { cva, type VariantProps } from "class-variance-authority";

export const tableBodyVariants = cva("", {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface TableBodyProps
  extends
    VariantProps<typeof tableBodyVariants>,
    React.ComponentProps<"tbody"> {}

export default function TableBody({
  variant,
  className,
  children,
  ...props
}: TableBodyProps) {
  return (
    <tbody className={tableBodyVariants({ variant, className })} {...props}>
      {children}
    </tbody>
  );
}
