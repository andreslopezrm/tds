import { getAuth } from "@clerk/remix/ssr.server";
import { json, LoaderArgs, redirect } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { checkUser } from "~/db/user.server";

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
            <div className="flex gap-8">
                <aside>
                    <Link to="stats">stadistics</Link>
                    <br />
                    <br />
                    <Link to="products">products</Link>
                    <br />
                    <br />
                    <Link to="perfil">perfil</Link>
                </aside>
                <section className="flex-1">
                    <Outlet />
                </section>
            </div>
        </main>
    );
}