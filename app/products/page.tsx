import { DataTable } from "../_components/ui/data-table";
import { productsTableColumns } from "./_components/table-columns";
import { getProduct } from "../_data-access/product/getProduct";
import CreateProductButton from "./_components/create-product-button";

const Produtos = async () => {
  const dataObject = await getProduct();
  const products = JSON.parse(JSON.stringify(dataObject))
  return (
    <div className="mx-8 my-8 w-full space-y-8 rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <CreateProductButton/>
      </div>
      <DataTable columns={productsTableColumns} data={products} />
    </div>
  );
};

export default Produtos;
