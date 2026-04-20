import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen w-full bg-cloudy-base p-4">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* <Header /> */}

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
