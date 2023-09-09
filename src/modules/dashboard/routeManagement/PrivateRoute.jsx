import { Navigate, useLocation } from "react-router-dom";
import useAuthValues from "../../authentication/hooks/useAuthValues";

export default function PrivateRoute({ children }) {
    const { user } = useAuthValues();
    const location = useLocation();

    if (!user?.email) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    } else {
        return children;
    }
}
