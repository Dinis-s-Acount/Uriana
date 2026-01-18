import { DataTable } from "../_components/ui/data-table";
import { productsTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-product";
import CreateProductButton from "./_components/create-product-button";
import {
  Header,
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
  HeaderRight,
} from "../_components/header";

const Produtos = async () => {
  const dataObject = await getProducts();
  const products = JSON.parse(JSON.stringify(dataObject));
  return (
    <div className="m-4 space-y-4 rounded-lg bg-white p-4 overflow-auto sm:m-6 sm:space-y-6 sm:p-6 md:m-8 md:space-y-8 md:p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Gestão de Produtos</HeaderSubtitle>
          <HeaderTitle>Produtos</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateProductButton />
        </HeaderRight>
      </Header>
      <DataTable columns={productsTableColumns} data={products} />
    </div>
  );
};

export default Produtos;
