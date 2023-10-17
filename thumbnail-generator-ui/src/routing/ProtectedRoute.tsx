import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

import { ROUTES } from "../helpers";

type Props = {
  children: React.ReactNode;
};

/**
 * Protected routes wrapper, to check the authentication status of the user and perform a redirect
 * to the login route if the user is not logged in.
 */
const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return children;
};

export default ProtectedRoute;
