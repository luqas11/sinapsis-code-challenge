import { Button, Typography } from "@mui/material";
import { AppContainer } from "../../components";
//import { useAuth0 } from "@auth0/auth0-react";

function LoginScreen() {
  //const { loginWithRedirect } = useAuth0();

  return (
    <AppContainer>
      <Typography variant="h4">Thumbnail Generator</Typography>
      <Typography variant="body1">
        A high quality, ultra-fast and extremely useful thumbnail generator.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => console.log(import.meta.env.VITE_TEST_ENV_VAR)}
      >
        Login to continue
      </Button>
    </AppContainer>
  );
}

export default LoginScreen;
