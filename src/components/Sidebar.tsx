import Button from "./Button";
import Dashboard from "../assets/icons/Dashboard.svg?react";
import TodosFunc from "../assets/icons/TodosFunc.svg?react";
import ContratosIcon from "../assets/icons/ContAtv.svg?react";
import { cva, type VariantProps } from "class-variance-authority";

export const sidebarVariants = cva(
  "fixed top-3 bottom-3 left-3 w-16 m-0 p-4 rounded shadow-lg",
  {
    variants: {
      variant: {
        primary: "bg-blue-dark",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface SiderbarProps
  extends VariantProps<typeof sidebarVariants>, React.ComponentProps<"aside"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Sidebar({
  variant,
  className,
  ...props
}: SiderbarProps) {
  return (
    <aside className={sidebarVariants({ variant, className })} {...props}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-1">
          <Button icon={Dashboard} size={"sm"} variant={"sidebar"}>
            Dashboard
          </Button>
          <Button icon={TodosFunc} size={"sm"} variant={"sidebar"}>
            Funcionários
          </Button>
          <Button icon={ContratosIcon} size={"sm"} variant={"sidebar"}>
            Contratos
          </Button>
        </div>
      </div>
    </aside>
  );
}
