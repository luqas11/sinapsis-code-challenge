import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

/**
 * Protected routes wrapper, to check the authentication status of the user and perform a
 * redirect to the login route if necessary.
 */
const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
