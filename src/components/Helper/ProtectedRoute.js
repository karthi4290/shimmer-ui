import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  try {
    let isAuthenticated;
    isAuthenticated = false;
    return isAuthenticated ? <Outlet /> : <Navigate to="/Login" />;
  } catch (error) {
    console.log(error);
  }
};
