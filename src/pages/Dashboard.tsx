import CardComponent from "../components/cardComponent";
import Pagination from "../components/Pagination";
import DataTable from "../components/DataTableComponents/DataTable";
import SimpleBarChart from "../components/Charts/SimpleBarChart";
import CardsContainer from "../components/CardsContainer";
import Text from "../components/Text";
import SimpleLineChart from "../components/Charts/SimpleLineChart";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-3">
      <CardsContainer variant={"secondary"}>
        <CardComponent title="Monthly payroll cost">
          <Text textColor={"secondary"} variant={"heading-lg"}>
            asd
          </Text>
        </CardComponent>
        <CardComponent variant={"secondary"} title="Total employees">
          <Text variant={"heading-lg"}>asd</Text>
        </CardComponent>
        <CardComponent variant={"secondary"} title="Turnover rate">
          <Text variant={"heading-lg"}>asd</Text>
        </CardComponent>
        <CardComponent variant={"secondary"} title="Active contracts">
          <Text variant={"heading-lg"}>asd</Text>
        </CardComponent>
      </CardsContainer>
      <CardComponent title="Payroll cost over time" variant={"secondary"}>
        <SimpleLineChart />
      </CardComponent>
      <CardComponent title="Employees by Department" variant={"secondary"}>
        <SimpleBarChart />
      </CardComponent>
      <CardComponent variant={"secondary"} title={"All Employees"}>
        <DataTable
          columns={["Name", "Contact", "Department", "Role"]}
          rows={[
            ["Adriane", "adriane@procob.com", "Sales", "Seller"],
            ["Daiana", "daiana@procob.com", "Sales", "Seller"],
            ["Diemes", "diemes@procob.com", "Sales", "Seller"],
            ["Tayna", "tayna@procob.com", "Sales", "Seller"],
          ]}
        />
        <Pagination />
      </CardComponent>
    </div>
  );
}
