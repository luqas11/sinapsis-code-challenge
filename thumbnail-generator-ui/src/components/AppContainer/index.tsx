import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

import { ROUTES } from "../../helpers";

type Props = {
  children: React.ReactNode;
};

/**
 * Container that has common UI for the whole app, composed by an appbar with a title and a
 * conditionally rendered logout button.
 */
const AppContainer = ({ children }: Props) => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flex: 1 }}>
            Thumbnail Generator
          </Typography>
          {isAuthenticated && (
            <Button
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo: window.location.origin + ROUTES.LOGIN,
                  },
                })
              }
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: 2,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default AppContainer;
