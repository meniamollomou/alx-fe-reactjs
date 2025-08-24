// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // 🔑 change to `true` to allow access

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
