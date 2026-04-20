import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="flex min-h-screen w-full bg-cloudy-base justify-center items-center">
      <Outlet />
    </main>
  );
}
