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
          <Text variant={"heading-lg"}>USD 13,000.00</Text>
        </CardComponent>
        <CardComponent variant={"tertiary"} title="Total employees">
          <Text textColor={"secondary"} variant={"heading-lg"}>
            35
          </Text>
        </CardComponent>
        <CardComponent variant={"tertiary"} title="Turnover rate">
          <Text textColor={"secondary"} variant={"heading-lg"}>
            12%
          </Text>
        </CardComponent>
        <CardComponent variant={"tertiary"} title="Active contracts">
          <Text textColor={"secondary"} variant={"heading-lg"}>
            35
          </Text>
        </CardComponent>
      </CardsContainer>
      <CardsContainer variant={"tertiary"}>
        <CardComponent title="Payroll cost over time" variant={"tertiary"}>
          <SimpleLineChart
            data={payrollCostOverTime}
            xDataKey="name"
            yDataKey="payrollCost"
          />
        </CardComponent>
        <CardComponent title="Employees by Department" variant={"tertiary"}>
          <SimpleBarChart data={employeesByDepartment} />
        </CardComponent>
      </CardsContainer>
      <CardComponent variant={"tertiary"} title={"All Employees"}>
        <DataTable
          columns={employeesTable.columns}
          rows={employeesTable.rows}
        />
      </CardComponent>
    </div>
  );
}
