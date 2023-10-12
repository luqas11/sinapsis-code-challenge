import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 350, backgroundColor: "#BBBBEE" }}>
      <CardContent>
        <Typography variant="h4">Thumbnail Generator</Typography>
        <Typography variant="body1">
          A high quality, ultra-fast and extremely useful thumbnail generator.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" onClick={() => navigate("/image-chooser")}>
          Login to continue
        </Button>
      </CardActions>
    </Card>
  );
}

export default LoginScreen;
