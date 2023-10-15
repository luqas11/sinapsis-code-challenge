import { Button, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

import { AppContainer } from "../../components";

/**
 * Screen to let the user log in and be redirected to the app.
 */
const LoginScreen = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <AppContainer>
      <Typography variant="h4">Thumbnail Generator</Typography>
      <Typography variant="body1">
        A high quality, ultra-fast, and extremely useful thumbnail generator.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => loginWithRedirect()}
      >
        Login to continue
      </Button>
    </AppContainer>
  );
};

export default LoginScreen;
