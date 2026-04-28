import { cva, type VariantProps } from "class-variance-authority";

export const cardContainerVariants = cva("border rounded p-2", {
  variants: {
    variant: {
      primary: "border-blue-light bg-blue-base",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface HeaderProps
  extends
    VariantProps<typeof cardContainerVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function CardComponent({
  variant,
  className,
  ...props
}: HeaderProps) {
  return (
    <div className={cardContainerVariants({ variant, className })} {...props}>
      <span>cardcomponent</span>
    </div>
  );
}
