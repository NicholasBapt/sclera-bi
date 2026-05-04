import CardComponent from "../components/cardComponent";
import Pagination from "../components/Pagination";
import DataTable from "../components/DataTableComponents/DataTable";
import SimpleBarChart from "../components/Charts/SimpleBarChart";
import CardsContainer from "../components/CardsContainer";
import Text from "../components/Text";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-3">
      <CardsContainer variant={"secondary"}>
        <CardComponent title="Custo Mensal de Folha">
          <Text variant={"heading-lg"}>asd</Text>
        </CardComponent>
        <CardComponent variant={"secondary"} title="Title 1">
          <Text variant={"heading-lg"}>asd</Text>
        </CardComponent>
        <CardComponent variant={"secondary"} title="Title 1">
          <Text variant={"heading-lg"}>asd</Text>
        </CardComponent>
        <CardComponent variant={"secondary"} title="Title 1">
          <Text variant={"heading-lg"}>asd</Text>
        </CardComponent>
      </CardsContainer>
      <CardsContainer>
        <CardComponent variant={"secondary"} title={"Staff"}>
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
      </CardsContainer>
      <CardComponent title="Random Graph for now" variant={"secondary"}>
        <SimpleBarChart />
      </CardComponent>
    </div>
  );
}
