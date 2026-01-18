import dynamic from "next/dynamic";
import { getLast14DaysRevenue } from "@/app/_data-access/dashboard/get-last-14-days-revenue";

const RevenueChart = dynamic(() => import("./revenue-chart"), {
  ssr: false,
});

const Last14DaysRevenueCard = async () => {
    const totalLast14DaysRevenue = await getLast14DaysRevenue();
    return (
        <div className="flex h-full min-h-[300px] flex-col overflow-hidden rounded-xl bg-white p-4 sm:p-6">
          <p className="text-base font-semibold text-slate-900 sm:text-lg">Receita </p>
          <p className="text-xs text-slate-400 sm:text-sm">Últimos 14 dias</p>

          <div className="mt-4 flex-1 overflow-x-auto">
            <RevenueChart data={totalLast14DaysRevenue} />
          </div>
        </div>
    );
};

export default Last14DaysRevenueCard;
