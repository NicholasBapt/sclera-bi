import { cva, type VariantProps } from "class-variance-authority";
import Text from "../Text";
import TextInput from "../FormComponents/Inputs/TextInput";

export const loginFirstStepVariants = cva(
  "w-2xl flex flex-col justify-center",
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

interface LoginFirstStepProps
  extends
    React.ComponentProps<"div">,
    VariantProps<typeof loginFirstStepVariants> {}

export default function LoginFirstStep({
  variant,
  className,
}: LoginFirstStepProps) {
  return (
    <div className={loginFirstStepVariants({ variant, className })}>
      <Text variant={"head-lg-bold"}>Boas vindas</Text>
      <Text variant={"body-md"}>Realize o login abaixo:</Text>
      <TextInput />
    </div>
  );
}
