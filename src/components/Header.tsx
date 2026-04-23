import Dashboard from "../assets/icons/Dashboard.svg?react";
import TodosFunc from "../assets/icons/TodosFunc.svg?react";
import { cva, type VariantProps } from "class-variance-authority";
import ButtonIcon from "./IconButton";
import { Link } from "react-router-dom";
import Divider from "./Divider";

export const headerVariants = cva("", {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface SiderbarProps
  extends VariantProps<typeof headerVariants>, React.ComponentProps<"header"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Header({
  variant,
  className,
  ...props
}: SiderbarProps) {
  return (
    <header className={headerVariants({ variant, className })} {...props}>
      <div className="flex flex-col w-full justify-end h-full border-b-blue-light">
        <div className="flex flex-row justify-end gap-2">
          <Link to="/dashboard">
            <ButtonIcon icon={Dashboard} size={"sm"} variant={"header"} />
          </Link>
          <Link to="/funcionarios">
            <ButtonIcon icon={TodosFunc} size={"sm"} variant={"header"} />
          </Link>
        </div>
        <Divider className="mt-3" />
      </div>
    </header>
  );
}
