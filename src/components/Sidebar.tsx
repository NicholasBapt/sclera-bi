import Dashboard from "../assets/icons/Dashboard.svg?react";
import TodosFunc from "../assets/icons/TodosFunc.svg?react";
import ContratosIcon from "../assets/icons/ContAtv.svg?react";
import { cva, type VariantProps } from "class-variance-authority";
import ButtonIcon from "./IconButton";

export const sidebarVariants = cva(
  "fixed top-3 bottom-3 left-3 m-0 p-2 rounded shadow-lg",
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
        <div className="flex flex-col gap-2">
          <ButtonIcon
            icon={Dashboard}
            size={"md"}
            variant={"sidebar"}
            text={"Dashboard"}
          />
          <ButtonIcon
            icon={TodosFunc}
            size={"md"}
            variant={"sidebar"}
            text={"Funcionários"}
          />
          <ButtonIcon
            icon={ContratosIcon}
            size={"md"}
            variant={"sidebar"}
            text={"Contratos"}
          />
        </div>
      </div>
    </aside>
  );
}
