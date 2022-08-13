import { Link, Outlet } from "@remix-run/react";

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