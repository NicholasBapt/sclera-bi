export default function Sidebar() {
  return (
    <div className="flex flex-col w-48 p-4 bg-blue-dark rounded text-white">
      <span>Logo</span>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <span>MENU 1</span>
          <span>MENU 1</span>
          <span>MENU 1</span>
        </div>
        <span>Recolher</span>
      </div>
    </div>
  );
}
