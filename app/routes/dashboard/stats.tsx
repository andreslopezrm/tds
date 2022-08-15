import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "remix-utils";
import DashHeader from "~/components/dash-header";
import { getStatsInWeek } from "~/db/stats.server";

export async function loader({ request }: LoaderArgs) {
    const { userId } = await getAuth(request);
    
    if(!userId) {
        return redirect("/sign-up");
    }
    const stats = await getStatsInWeek(userId);
    return json({ stats });
}


export default function DashboardStatsRoute() {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <DashHeader title="Stats" />
        </div>
    );
}