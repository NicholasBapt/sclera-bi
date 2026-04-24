import TodosFunc from "../assets/icons/TodosFunc.svg?react";
import Bell from "../assets/icons/Bell.svg?react";
import User from "../assets/icons/User.svg?react";
import { cva, type VariantProps } from "class-variance-authority";
import ButtonIcon from "./IconButton";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import Text from "./Text";

export const headerVariants = cva("pl-4 flex flex-col w-full justify-start", {
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
      <div className="flex items-center gap-3 justify-end">
        <div className="flex flex-row justify-end gap-2 ">
          <ButtonIcon icon={Bell} size={"sm"} variant={"header"} />
          <Link to="/user">
            <ButtonIcon icon={User} size={"sm"} variant={"header"} />
          </Link>
        </div>
        <div className="flex flex-col">
          <Text variant="body-sm-bold">Nicholas Baptista</Text>
          <Text variant="body-sm">nicholas.i</Text>
        </div>
      </div>
      <Divider variant="secondary" className="mt-3" />
    </header>
  );
}
