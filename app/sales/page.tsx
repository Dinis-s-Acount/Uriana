import { getProducts, ProductDTO } from "../_data-access/product/get-product";
import { ComboboxOption } from "../_components/ui/combobox";
import CreateSaleButton from "./_components/create-sale-button";
import { getSales, SalesDTO } from "../_data-access/sales/get-sales";
import {
  Header,
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
  HeaderRight,
} from "../_components/header";
import { DataTable } from "../_components/ui/data-table";
import { saleTableColumns } from "./_components/table-columns";

const SalesPage = async () => {
  const sales = JSON.parse(JSON.stringify(await getSales()));
  const products = JSON.parse(JSON.stringify(await getProducts()));
  const productOptions: ComboboxOption[] = products.map((product: ProductDTO) => ({
    label: product.name,
    value: product.id,
  }));

  const tableData = sales.map((sale: SalesDTO) => ({
    ...sale,
    products,
    productOptions,
  }));

  return (
    <div className="m-4 space-y-4 rounded-lg bg-white p-4 overflow-auto sm:m-6 sm:space-y-6 sm:p-6 md:m-8 md:space-y-8 md:p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Gestão de Vendas</HeaderSubtitle>
          <HeaderTitle>Vendas</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateSaleButton
            products={products}
            productOptions={productOptions}
          />
        </HeaderRight>
      </Header>
      <DataTable columns={saleTableColumns} data={tableData} />
    </div>
  );
};

export default SalesPage;
