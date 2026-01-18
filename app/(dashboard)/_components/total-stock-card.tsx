import { getTotalStock } from "@/app/_data-access/dashboard/get-total-stock";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";
import { Package } from "lucide-react";

const TotalStockCard = async () => {
  const totalStock = await getTotalStock();

  return (
    <SummaryCard>
      <SummaryCardIcon>
        <Package />
      </SummaryCardIcon>
      <SummaryCardTitle>Estoque Total</SummaryCardTitle>
      <SummaryCardValue>{totalStock}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TotalStockCard;
