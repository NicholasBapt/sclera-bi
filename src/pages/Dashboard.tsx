import CardComponent from "../components/cardComponent";
import Pagination from "../components/Pagination";
import DataTable from "../components/DataTableComponents/DataTable";
import SimpleBarChart from "../components/Charts/SimpleBarChart";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-2">
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
      <CardComponent variant={"secondary"}>
        <SimpleBarChart />
      </CardComponent>
    </div>
  );
}
