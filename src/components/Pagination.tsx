import { cva, type VariantProps } from "class-variance-authority";
import Button from "./Button";
import Text from "./Text";

export const paginationVariants = cva(
  "flex gap-2 items-center justify-center w-full pt-2",
  {
    variants: {
      variant: {
        primary: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface PaginationProps
  extends
    VariantProps<typeof paginationVariants>,
    React.ComponentProps<"div"> {}

const paginationItems = ["<", "1", "2", "3", ">"];

export default function Pagination({
  variant,
  className,
  ...props
}: PaginationProps) {
  return (
    <div className={paginationVariants({ variant, className })} {...props}>
      {paginationItems.map((item) => (
        <Button
          key={item}
          size="xsm"
          variant="pagination"
          aria-label={
            item === "<"
              ? "Página anterior"
              : item === ">"
                ? "Próxima página"
                : `Página ${item}`
          }
        >
          <Text variant="body-sm-bold">{item}</Text>
        </Button>
      ))}
    </div>
  );
}
