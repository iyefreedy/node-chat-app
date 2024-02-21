import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Protected = () => {
    const { user } = useAuth();

    if (!user) return <Navigate to={"/login"} replace />;

    return <Outlet />;
};

export default Protected;
