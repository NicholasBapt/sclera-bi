import CardComponent from "../components/cardComponent";
import DataTable from "../components/DataTableComponents/DataTable";
import SimpleBarChart from "../components/Charts/SimpleBarChart";
import CardsContainer from "../components/CardsContainer";
import Text from "../components/Text";
import SimpleLineChart from "../components/Charts/SimpleLineChart";
import employeesTable from "../data/dashboardEmployees.json";
import payrollCostOverTime from "../data/payrollCostOverTime.json";
import employeesByDepartment from "../data/employeesByDepartment.json";

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
      <CardsContainer variant={"tertiary"}>
        <CardComponent title="Payroll cost over time" variant={"secondary"}>
          <SimpleLineChart
            data={payrollCostOverTime}
            xDataKey="name"
            yDataKey="payrollCost"
          />
        </CardComponent>
        <CardComponent title="Employees by Department" variant={"secondary"}>
          <SimpleBarChart data={employeesByDepartment} />
        </CardComponent>
      </CardsContainer>
      <CardComponent variant={"secondary"} title={"All Employees"}>
        <DataTable
          columns={employeesTable.columns}
          rows={employeesTable.rows}
        />
      </CardComponent>
    </div>
  );
}
