import { json, LoaderArgs } from "@remix-run/node";
import { getQueryStringParameter } from "~/utils/params.server";

export function loader({ request }: LoaderArgs) {
    const apiKey = getQueryStringParameter(request, "api_key");
    if(!apiKey) {
        return json({ status: "forbidden", error: "Forbiden Access" }, { status: 403 });
    }
    
    return json({});
}