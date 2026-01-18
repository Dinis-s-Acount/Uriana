import { getTotalRevenue } from "@/app/_data-access/dashboard/get-total-revenue";
import {
    SummaryCard,
    SummaryCardIcon,
    SummaryCardTitle,
    SummaryCardValue,
} from "./summary-card";
import { DollarSignIcon } from "lucide-react";
import { formatCurrency } from "@/app/_helpers/currency";

const TotalRevenueCard = async () => {
    const totalRevenue = await getTotalRevenue();
    return (
        <SummaryCard>
            <SummaryCardIcon>
                <DollarSignIcon />
            </SummaryCardIcon>
            <SummaryCardTitle>Receita Total</SummaryCardTitle>
            <SummaryCardValue>{formatCurrency(totalRevenue)}</SummaryCardValue>
        </SummaryCard>
    );
};

export default TotalRevenueCard;
