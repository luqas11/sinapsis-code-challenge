import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

import { ROUTES } from "../helpers";

type Props = {
  children: React.ReactNode;
};

/**
 * Public routes wrapper, to check the authentication status of the user and perform a
 * redirect to the image chooser route if necessary.
 */
const PublicRoute = ({ children }: Props) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isAuthenticated) {
    return <Navigate to={ROUTES.IMAGE_CHOOSER} replace />;
  }
  return children;
};

export default PublicRoute;
