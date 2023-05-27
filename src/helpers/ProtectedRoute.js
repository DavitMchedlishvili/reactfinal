import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isUserAdmin }) => {
  if (!isUserAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};
