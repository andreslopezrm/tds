import { getAuth } from "@clerk/remix/ssr.server";
import { json, LoaderArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import DashHeader from "~/components/dash-header";
import { getTotalDashboard } from "~/db/dashboard.server";

export async function loader({ request }: LoaderArgs) {
    const { userId } = await getAuth(request);
    
    if(!userId) {
        return redirect("/sign-up");
    }

    const { totalCategories, totalTips, totalStats, lastTips } = await getTotalDashboard(userId);
    return json({ totalCategories, totalTips, totalStats, lastTips });
}

export default function DashboardIndexRoute(){
    const { totalCategories, totalTips, totalStats, lastTips } = useLoaderData<typeof loader>();

    return (
        <div>
            <DashHeader title="Welcome" />
            <div className="container m-auto mt-6">
                <section className="md:flex md:gap-5">
                    <div className="text-gray-900 border-2 border-gray-800 rounded-lg px-5 py-2.5 text-center mb-3 md:flex-1">
                        <h4 className="font-semibold text-lg mb-3">Total Categories</h4>
                        <p className="font-extrabold text-3xl">{totalCategories}</p>
                    </div>

                    <div className="text-gray-900 border-2 border-gray-800 rounded-lg px-5 py-2.5 text-center mb-3 md:flex-1">
                        <h4 className="font-semibold text-lg mb-3">Total Tips</h4>
                        <p className="font-extrabold text-3xl">{totalTips}</p>
                    </div>

                    <div className="text-gray-900 border-2 border-gray-800 rounded-lg px-5 py-2.5 text-center mb-3 md:flex-1">
                        <h4 className="font-semibold text-lg mb-3">Total Request Today</h4>
                        <p className="font-extrabold text-3xl">{totalStats}</p>
                    </div>
                </section>
                <section>
                    <h2 className="font-bold mt-6 text-xl">Last tips</h2>
                    <div className="overflow-x-auto relative mt-6">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lastTips.length > 0 ? lastTips.map(tip => (
                                        <tr className="bg-white border-b" key={tip.entityId}>
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                {tip.description}
                                            </th>
                                        </tr>
                                    )) : (
                                        <tr className="text-center text-gray-800 mt-3">
                                            <td>
                                                <p className="mt-3">Empty</p>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}