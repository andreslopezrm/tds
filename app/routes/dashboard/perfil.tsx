import { UserProfile } from "@clerk/remix";
import DashHeader from "~/components/dash-header";

export default function DashboardPerfilRoute() {
    return (
        <div>
            <DashHeader title="Perfil" />
            <div className="auth auth-perfil mt-8">
                <UserProfile />
            </div>
        </div>
    );
}