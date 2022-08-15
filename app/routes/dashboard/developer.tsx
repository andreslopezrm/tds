import { getAuth } from "@clerk/remix/ssr.server";
import { json, LoaderArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import DashHeader from "~/components/dash-header";
import DeveloperDocs from "~/components/developer-docs";
import DeveloperList from "~/components/developer-list";
import { ApiKey, getApiKeyByUser } from "~/db/apikey.server";

export async function loader({ request }: LoaderArgs) {
    const { userId } = await getAuth(request);
    
    if(!userId) {
        return redirect("/sign-up");
    }
    const apiKey = await getApiKeyByUser(userId) as ApiKey;
    return json({ apiKey });
}

export default function DashboardDeveloperRoute() {
    
    const { apiKey } = useLoaderData();
    const [showApiKey, setShowApiKey] = useState(false);
   
    const apiKeyValue = showApiKey ? apiKey?.value : "******************";
    const handleToogleVisible = () => setShowApiKey(!showApiKey);

    return (
        <div>
            <DashHeader title="Developer" />
            <p className="mt-4 font-light">To use the api rest of the tip of the day, send the value of your Api Key as a query parameter in the request</p>
            <DeveloperList apiKey={apiKeyValue} visible={showApiKey} onToogleVisible={handleToogleVisible} />
            <DeveloperDocs apiKeyShow={apiKey?.value} apiKeyHidden={apiKeyValue} />
        </div>
    );
}