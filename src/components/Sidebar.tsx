import Button from "./Button";
import Dashboard from "../assets/icons/Dashboard.svg?react";
import TodosFunc from "../assets/icons/TodosFunc.svg?react";
import ContratosIcon from "../assets/icons/ContAtv.svg?react";
import LeftArrowIcon from "../assets/icons/LeftArrow.svg?react";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-48 p-4 bg-blue-dark rounded text-white">
      <span>Logo</span>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-1">
          <Button icon={Dashboard} size={"sm"} variant={"sidebar"}>
            Dashboard
          </Button>
          <Button icon={TodosFunc} size={"sm"} variant={"sidebar"}>
            Funcionários
          </Button>
          <Button icon={ContratosIcon} size={"sm"} variant={"sidebar"}>
            Contratos
          </Button>
        </div>
        <Button icon={LeftArrowIcon} size={"sm"} variant={"sidebar"}>
          Recolher Menu
        </Button>
      </div>
    </div>
  );
}
