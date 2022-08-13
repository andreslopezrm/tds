import { Link, Outlet } from "@remix-run/react";

export default function DashboardRoute() {
    return (
        <main>
            <h1>Dashboard</h1>
            <div className="flex gap-8">
                <div>
                    <Link to="stats">stadistics</Link>
                    <br />
                    <br />
                    <Link to="products">products</Link>
                    <br />
                    <br />
                    <Link to="perfil">perfil</Link>
                </div>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}