import { getAuth } from "@clerk/remix/ssr.server";
import { json, LoaderArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import DashHeader from "~/components/dash-header";
import { getStatsInWeek } from "~/db/stats.server";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
export async function loader({ request }: LoaderArgs) {
    const { userId } = await getAuth(request);
    
    if(!userId) {
        return redirect("/sign-up");
    }
    const stats = await getStatsInWeek(userId);
    return json({ stats });
}

export default function DashboardStatsRoute() {
    const { stats } = useLoaderData<{stats: {date: string, count: number }[]}>();

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Stats',
          },
        },
    };

    const labels = stats.map(({ date }) => date);
    
    const data = {
        labels,
        datasets: [
          {
            label: 'Day',
            data: stats.map(({ count }) => count),
            backgroundColor: '#000',
          }
        ],
    };
    
    return (
        <div>
            <DashHeader title="Stats" />
            <Bar options={options} data={data} />
        </div>
    );
}