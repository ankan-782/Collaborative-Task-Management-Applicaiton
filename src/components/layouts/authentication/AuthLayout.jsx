import { Outlet } from "react-router-dom";
import AuthLogo from "../../common/logo/AuthLogo";

export default function AuthLayout() {
    return (
        <div
            aria-label="auth layout"
            className="bg-white"
        >
            <div className="container tablet:px-10 laptop:px-20">
                <div className="h-screen flex justify-between items-center">
                    <AuthLogo extraClasses="h-96 w-auto flex-1" />
                    <div className="flex-1">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
