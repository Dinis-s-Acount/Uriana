import { getTotalProducts } from "@/app/_data-access/dashboard/get-total-products";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { Package } from "lucide-react";

const TotalProductsCard = async () => {
  const totalProducts = await getTotalProducts();

  return (
    <SummaryCard>
      <SummaryCardIcon>
        <Package />
      </SummaryCardIcon>
      <SummaryCardTitle>Produtos Totais</SummaryCardTitle>
      <SummaryCardValue>{totalProducts}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TotalProductsCard;
