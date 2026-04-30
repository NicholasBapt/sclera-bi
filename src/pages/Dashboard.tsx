import CardComponent from "../components/cardComponent";
import Pagination from "../components/Pagination";
import DataTable from "../components/DataTableComponents/DataTable";

export function Dashboard() {
  return (
    <CardComponent variant={"secondary"}>
      <DataTable
        columns={["Name", "Contact", "Department", "Role"]}
        rows={[
          ["Nick", "nick@email.com", "Development", "Front-End Developer"],
          ["Jane", "jane@email.com", "Development", "Front-End Developer"],
          ["Nick", "nick@email.com", "Development", "Front-End Developer"],
          ["Jane", "jane@email.com", "Development", "Front-End Developer"],
        ]}
      />
      <Pagination />
    </CardComponent>
  );
}
