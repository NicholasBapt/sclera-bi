import { cva, type VariantProps } from "class-variance-authority";
import Text from "../../Text";
import TextInput from "./TextInput";

export const inputFieldVariants = cva("flex flex-col gap-0.5", {
  variants: {
    variant: {
      regular: "mb-2",
      last: "mb-0",
    },
  },
  defaultVariants: {
    variant: "regular",
  },
});

interface InputFieldProps
  extends
    Omit<React.ComponentProps<typeof TextInput>, "size" | "variant">,
    VariantProps<typeof inputFieldVariants> {
  label: string;
  className?: string;
}

export default function InputField({
  label,
  variant,
  className,
  ...inputProps
}: InputFieldProps) {
  return (
    <div className={inputFieldVariants({ variant, className })}>
      <Text variant="body-sm">{label}</Text>
      <TextInput {...inputProps} />
    </div>
  );
}
