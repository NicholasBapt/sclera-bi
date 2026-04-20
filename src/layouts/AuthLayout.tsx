import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-cloudy-base p-4">
      <div className="flex-1 flex flex-col">
        {/* <Header /> */}

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
