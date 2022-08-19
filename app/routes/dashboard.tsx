import { getAuth } from "@clerk/remix/ssr.server";
import { json, LoaderArgs, redirect } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import DashNavbar from "~/components/dash-navbar";
import { checkUser } from "~/db/user.server";
import { getClerkUser } from "~/utils/clerk";

export async function loader({ request }: LoaderArgs) {
    const { userId } = await getAuth(request);
    
    if(!userId) {
        return redirect("/sign-up");
    }

    await checkUser(userId);
    return json({ userId });
}

export default function DashboardRoute() {
    return (
        <main>
            <div className="flex min-h-screen">
                <DashNavbar />
                <section className="flex-1 px-4 py-4 md:px-6">
                    <Outlet />
                </section>
            </div>
        </main>
    );
}