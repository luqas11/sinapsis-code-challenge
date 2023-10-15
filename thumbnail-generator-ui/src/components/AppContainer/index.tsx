import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  children: React.ReactNode;
};

/**
 * Container that has the common UI for the whole app, composed by a title and an appbar
 * with a logout button.
 */
const AppContainer = ({ children }: Props) => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Thumbnail Generator
          </Typography>
          {isAuthenticated && (
            <Button
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin + "/login" },
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
          pt: 2,
          pb: 2,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default AppContainer;
