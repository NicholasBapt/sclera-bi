import { Outlet } from "react-router-dom";
import bg from "../assets/images/loginBG.webp";

export default function AuthLayout() {
  return (
    <main
      className="flex min-h-screen w-full bg-cloudy-base justify-center items-center bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Outlet />
    </main>
  );
}
