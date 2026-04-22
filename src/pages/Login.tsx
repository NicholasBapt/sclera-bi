import LoginFirstStep from "../components/LoginSteps/LoginFirstStep";

export function Login() {
  return (
    <div className="flex flex-col justify-center justify-items-center p-4 rounded-lg w-full max-w-md bg-blue-base">
      <LoginFirstStep />
    </div>
  );
}
