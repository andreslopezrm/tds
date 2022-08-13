import { json, LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getQueryIntParameter } from "~/utils/params.server";


export function loader({ request }: LoaderArgs) {
    const offset = getQueryIntParameter(request, 'offset', 0);

    return json({ offset });
}

export default function DashboardTipsRoute(){
    const { offset } = useLoaderData<typeof loader>();

    return (
        <div>
            <h1>products dash</h1>
            <p>Offset: {offset}</p>
            <Link to="/dashboard/products?offset=2">Next</Link>
        </div>
    )
}