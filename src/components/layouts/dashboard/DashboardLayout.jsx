import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../../modules/dashboard/components/DashboardNavbar";
import DashboardSidebar from "../../../modules/dashboard/components/DashboardSidebar";

export default function DashboardLayout() {
    return (
        <div
            aria-label="dashboard layout"
            className="bg-white"
        >
            <DashboardSidebar />
            <div className="">
                <DashboardNavbar />
                <div className="p-14 ml-60">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
