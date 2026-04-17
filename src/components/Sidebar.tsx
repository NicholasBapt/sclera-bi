import Button from "./Button";
import Dashboard from "../assets/icons/Dashboard.svg?react";
import TodosFunc from "../assets/icons/TodosFunc.svg?react";
import ContratosIcon from "../assets/icons/ContAtv.svg?react";
import LeftArrowIcon from "../assets/icons/LeftArrow.svg?react";
import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";

export const sidebarVariants = cva("flex flex-col p-4 rounded", {
  variants: {
    variant: {
      primary: "bg-blue-dark",
    },
    open: {
      true: "w-48",
      false: "w-14",
    },
  },
  defaultVariants: {
    variant: "primary",
    open: true,
  },
});

interface SiderbarProps
  extends VariantProps<typeof sidebarVariants>, React.ComponentProps<"aside"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Sidebar({
  variant,
  open,
  className,
  children,
  ...props
}: SiderbarProps) {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleSidebar = () => {
    setOpenSideBar((prev) => !prev);
  };

  return (
    <aside
      className={sidebarVariants({ variant, open: openSideBar, className })}
      {...props}
    >
      <span>Logo</span>
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
        <Button
          onClick={toggleSidebar}
          icon={LeftArrowIcon}
          size={"sm"}
          variant={"sidebar"}
        >
          Recolher Menu
        </Button>
      </div>
    </aside>
  );
}
