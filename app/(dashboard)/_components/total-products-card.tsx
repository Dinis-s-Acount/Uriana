import { getTotalProducts } from "@/app/_data-access/dashboard/get-total-products";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { ShoppingPackageIcon } from "lucide-react";

const TotalProductsCard = async () => {
  const totalProducts = await getTotalProducts();

  return (
    <SummaryCard>
      <SummaryCardIcon>
        <ShoppingPackageIcon />
      </SummaryCardIcon>
      <SummaryCardTitle>Produtos Totais</SummaryCardTitle>
      <SummaryCardValue>{totalProducts}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TotalProductsCard;
