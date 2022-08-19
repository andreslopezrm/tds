import { getAuth } from "@clerk/remix/ssr.server";
import { json, LoaderArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import DashHeader from "~/components/dash-header";
import { DashTips } from "~/components/dash-tips";
import DashTotals from "~/components/dash-totals";
import { DashboardTotals, getTotalDashboard } from "~/db/dashboard.server";

export async function loader({ request }: LoaderArgs) {
    const { userId } = await getAuth(request);
    
    if(!userId) {
        return redirect("/sign-up");
    }

    const { totalCategories, totalTips, totalStats, lastTips } = await getTotalDashboard(userId);
    return json({ totalCategories, totalTips, totalStats, lastTips });
}

export default function DashboardIndexRoute(){
    const { totalCategories, totalTips, totalStats, lastTips } = useLoaderData() as DashboardTotals;

    return (
        <div>
            <DashHeader title="Welcome" />
            <div className="container m-auto mt-6">
                <DashTotals totalCategories={totalCategories} totalTips={totalTips} totalStats={totalStats} />
                <DashTips tips={lastTips} />
            </div>
        </div>
    )
}