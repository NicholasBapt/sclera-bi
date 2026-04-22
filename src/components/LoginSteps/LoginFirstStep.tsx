import Text from "../Text";
import Divider from "../Divider";
import InputField from "../FormComponents/Inputs/InputField";
import InputCheckbox from "../FormComponents/Inputs/InputCheckbox";
import { Link } from "react-router-dom";
import Button from "../Button";

interface LoginFirstStepProps extends React.ComponentProps<"section"> {}

export default function LoginFirstStep({ ...props }: LoginFirstStepProps) {
  return (
    <section className="w-full flex flex-col justify-center gap-3" {...props}>
      <div className="flex flex-col">
        <Text variant={"head-lg"}>Boas vindas</Text>
        <Text variant={"body-md"}>Realize seu login abaixo</Text>
      </div>
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
      />
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <InputCheckbox />
          <Text variant="body-sm">Lembrar de mim?</Text>
        </label>
        <Link
          to="/"
          className="text-white hover:text-blue-light text-[14px] font-semibold"
        >
          Esqueci minha senha
        </Link>
      </div>
      <Button border={true} size="sm">
        Login
      </Button>
      <div className="gap-1 flex justify-center">
        <Text variant="body-sm">Não possui uma conta?</Text>
        <Link
          to="/"
          className=" hover:text-blue-light font-semibold text-white text-[14px]"
        >
          Cadastre-se
        </Link>
      </div>
    </section>
  );
}
