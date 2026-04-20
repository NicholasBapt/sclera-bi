import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import { Home } from "../pages/Home";
import { Funcionarios } from "../pages/Funcionarios";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";
import { Contratos } from "../pages/Contratos";
import { Login } from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "funcionarios",
        element: <Funcionarios />,
      },
      {
        path: "contratos",
        element: <Contratos />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
