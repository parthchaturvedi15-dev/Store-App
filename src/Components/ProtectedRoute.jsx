import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth();
  const location = useLocation();

   console.log("USER:", user);
  console.log("ROLE:", user?.role);
  console.log("ALLOWED:", allowedRoles);

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
