import { getTotalSales } from "@/app/_data-access/dashboard/get-total-sales";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { ShoppingBasketIcon } from "lucide-react";

const TotalSalesCard = async () => {
  const totalSales = await getTotalSales();

  return (
    <SummaryCard>
      <SummaryCardIcon>
        <ShoppingBasketIcon />
      </SummaryCardIcon>
      <SummaryCardTitle>Vendas Totais</SummaryCardTitle>
      <SummaryCardValue>{totalSales}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TotalSalesCard;
