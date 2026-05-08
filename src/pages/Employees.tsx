import CardComponent from "../components/cardComponent";
import DataTable from "../components/DataTableComponents/DataTable";
import CardsContainer from "../components/CardsContainer";
import employeesTable from "../data/dashboardEmployees.json";
import Text from "../components/Text";

export function Employees() {
  return (
    <div className="flex flex-col gap-3">
      <CardsContainer variant={"secondary"}>
        <CardComponent variant={"tertiary"} title="All employees">
          <Text textColor={"secondary"} variant={"heading-lg"}>
            35
          </Text>
        </CardComponent>
        <CardComponent variant={"tertiary"} title="Present">
          <Text textColor={"secondary"} variant={"heading-lg"}>
            20{" "}
          </Text>
        </CardComponent>
        <CardComponent variant={"tertiary"} title="Not in">
          <Text textColor={"secondary"} variant={"heading-lg"}>
            10
          </Text>
        </CardComponent>
        <CardComponent variant={"tertiary"} title="On a Leave">
          <Text textColor={"secondary"} variant={"heading-lg"}>
            5
          </Text>
        </CardComponent>
      </CardsContainer>
      <CardComponent title="Staff" variant={"tertiary"}>
        <DataTable
          columns={employeesTable.columns}
          rows={employeesTable.rows}
          rowsPerPage={20}
        />
      </CardComponent>
    </div>
  );
}
