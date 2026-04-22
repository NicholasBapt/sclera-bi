import LoginFirstStep from "../components/LoginSteps/LoginFirstStep";

export function Login() {
  return (
    <div className="flex flex-col justify-center justify-items-center px-4 py-6 rounded-lg w-full max-w-md bg-blue-dark/50 backdrop-blur-sm">
      <LoginFirstStep />
    </div>
  );
}
