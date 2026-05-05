import { cva, type VariantProps } from "class-variance-authority";
import Text from "./Text";
import Divider from "./Divider";

export const cardContainerVariants = cva(
  "border rounded p-2 w-full justify-center items-center shadow-2xl",
  {
    variants: {
      variant: {
        primary: "border-blue-light bg-blue-base",
        secondary: "border-blue-base bg-cloudy-light",
        tertiary: "border-blue-base bg-cloudy-base",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

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
  title,
  ...props
}: CardContainerProps) {
  return (
    <div className={cardContainerVariants({ variant, className })} {...props}>
      <Text variant="body-md-bold">{title}</Text>
      <Divider variant={variant} />
      <div className="w-full items-center flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
