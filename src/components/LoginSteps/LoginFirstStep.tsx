import { cva, type VariantProps } from "class-variance-authority";
import Text from "../Text";
import Divider from "../Divider";
import InputField from "../FormComponents/Inputs/InputField";

export const loginFirstStepVariants = cva(
  "w-full flex flex-col justify-center",
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
    React.ComponentProps<"section">,
    VariantProps<typeof loginFirstStepVariants> {}

export default function LoginFirstStep({
  variant,
  className,
  ...props
}: LoginFirstStepProps) {
  return (
    <section
      className={loginFirstStepVariants({ variant, className })}
      {...props}
    >
      <Text variant={"head-lg"}>Boas vindas</Text>
      <Text variant={"body-md"}>Realize o login abaixo:</Text>
      <Divider />
      <InputField
        label="Insira seu usuário ou e-mail"
        type="text"
        placeholder="usuario@usuario.com"
      />
      <InputField
        label="Insira sua senha"
        type="password"
        placeholder="senha123"
        variant="last"
      />
    </section>
  );
}
