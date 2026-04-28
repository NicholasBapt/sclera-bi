import { cva, type VariantProps } from "class-variance-authority";
import Text from "./Text";
import Divider from "./Divider";

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
      <Text>Card Component</Text>
      <Divider />
      <Text> Data </Text>
    </div>
  );
}
