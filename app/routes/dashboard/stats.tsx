import { getAuth } from "@clerk/remix/ssr.server";
import { json, LoaderArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { LineChart, Line } from "recharts";
import { ClientOnly } from "remix-utils";
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
    const data1 = useLoaderData();
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        setShow(true);
    }, []);
    
    return (
        <div>
            <DashHeader title="Stats" />
            
             {
                show && <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart>
             }   
        </div>
    );
}