import { cva, type VariantProps } from "class-variance-authority";
import Button from "./Button";
import Text from "./Text";

export const paginationVariants = cva(
  "grid grid-cols-[1fr_auto_1fr] items-center w-full px-2 pb-1 pt-3 gap-2",
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
    Omit<React.ComponentProps<"div">, "onChange"> {
  startItem: number;
  endItem: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  startItem,
  endItem,
  totalItems,
  currentPage,
  totalPages,
  onPageChange,
  variant,
  className,
  ...props
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div className={paginationVariants({ variant, className })} {...props}>
      <div aria-hidden="true" />

      <div className="flex items-center gap-2 justify-self-center">
        <Button
          size="xsm"
          variant="pagination"
          disabled={currentPage === 1}
          aria-label="Página anterior"
          onClick={() => onPageChange(currentPage - 1)}
        >
          {"<"}
        </Button>

        {pageNumbers.map((pageNumber) => (
          <Button
            key={pageNumber}
            size="xsm"
            variant="pagination"
            aria-label={`Página ${pageNumber}`}
            aria-current={pageNumber === currentPage ? "page" : undefined}
            className={
              pageNumber === currentPage
                ? "bg-blue-dark text-white hover:bg-blue-dark"
                : undefined
            }
            onClick={() => onPageChange(pageNumber)}
          >
            {String(pageNumber)}
          </Button>
        ))}

        <Button
          size="xsm"
          variant="pagination"
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
          onClick={() => onPageChange(currentPage + 1)}
        >
          {">"}
        </Button>
      </div>

      <Text variant="body-sm" className="text-blue-dark justify-self-end">
        {`Exibindo ${startItem}-${endItem} de ${totalItems}`}
      </Text>
    </div>
  );
}
