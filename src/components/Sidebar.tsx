import Button from "./Button";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-48 p-4 bg-blue-dark rounded text-white">
      <span>Logo</span>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <Button
            className="w-full justify-start"
            size={"sm"}
            variant={"primary"}
          >
            Dashboard
          </Button>
          <Button
            className="w-full justify-start"
            size={"sm"}
            variant={"sidebar"}
          >
            Funcionários
          </Button>
          <Button
            className="w-full justify-start"
            size={"sm"}
            variant={"sidebar"}
          >
            Contratos Ativos
          </Button>
        </div>
        <span>Recolher</span>
      </div>
    </div>
  );
}
