import { Navigate, useLocation } from "react-router-dom";
import useAuthValues from "../hooks/useAuthValues";

export default function AuthenticationRoute({ children }) {
    const { user } = useAuthValues();
    const location = useLocation();

    if (user?.email) {
        return <Navigate to='/dashboard' state={{ from: location }} replace />;
    } else {
        return children;
    }
}
