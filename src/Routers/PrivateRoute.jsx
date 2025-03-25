import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("jwt"); // Get JWT token from local storage

  return token ? <Outlet /> : <Navigate to="/home" replace />;
};

export default PrivateRoute;