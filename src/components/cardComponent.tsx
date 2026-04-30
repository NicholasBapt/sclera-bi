import { cva, type VariantProps } from "class-variance-authority";
import Text from "./Text";
import Divider from "./Divider";

export const cardContainerVariants = cva("border rounded p-2", {
  variants: {
    variant: {
      primary: "border-blue-light bg-blue-base",
      secondary: "border-blue-base bg-cloudy-light",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface CardContainerProps
  extends
    VariantProps<typeof cardContainerVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function CardComponent({
  variant,
  className,
  children,
  ...props
}: CardContainerProps) {
  return (
    <div className={cardContainerVariants({ variant, className })} {...props}>
      <Text variant="body-md-bold">Card Component</Text>
      <Divider variant={variant} />
      <div>{children}</div>
    </div>
  );
}
