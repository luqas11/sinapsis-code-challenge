import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppContainer } from "../../components";

function LoginScreen() {
  const navigate = useNavigate();

  return (
    <AppContainer>
      <Typography variant="h4">Thumbnail Generator</Typography>
      <Typography variant="body1">
        A high quality, ultra-fast and extremely useful thumbnail generator.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/image-chooser")}
      >
        Login to continue
      </Button>
    </AppContainer>
  );
}

export default LoginScreen;
