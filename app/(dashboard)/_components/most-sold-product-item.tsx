import { MostSoldProductDto } from "@/app/_data-access/dashboard/get-most-sold-products";
import { formatCurrency } from "@/app/_helpers/currency";

interface MostSoldProductItemProps {
  product: MostSoldProductDto;
}

const MostSoldProductItem = ({ product }: MostSoldProductItemProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="space-y-1 flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-900 truncate">{product.name}</p>
        <p className="text-xs font-medium text-slate-500">
          {formatCurrency(product.price)}
        </p>
      </div>
      <div className="flex-shrink-0">
        <p className="text-sm font-semibold text-slate-900 whitespace-nowrap">
          {product.totalSold} vendidos
        </p>
      </div>
    </div>
  );
};

export default MostSoldProductItem;
