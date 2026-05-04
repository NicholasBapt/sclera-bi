import { cva, type VariantProps } from "class-variance-authority";

export const cardsContainerVariants = cva("", {
  variants: {
    variant: {
      primary: "",
      secondary: "flex-row flex gap-3",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface CardsContainerProps
  extends
    VariantProps<typeof cardsContainerVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function CardsContainer({
  variant,
  className,
  children,
  ...props
}: CardsContainerProps) {
  return (
    <div className={cardsContainerVariants({ variant, className })} {...props}>
      {children}
    </div>
  );
}
