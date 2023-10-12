import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ImageChooserScreen() {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 350,
        backgroundColor: "#AAAAFF",
      }}
    >
      <CardContent>
        <Typography variant="h4">Choose an image</Typography>
        <Typography variant="body1">
          Only JPEG and PNG files with a maximum size of 11MB are allowed.
        </Typography>
      </CardContent>
      <CardContent>
        <CardMedia component="img" image="../../../mock_images/original.jpg" />
      </CardContent>
      <CardActions>
        <Button variant="contained">Choose image</Button>

        <Button
          variant="contained"
          onClick={() => navigate("/thumbnail-viewer")}
        >
          Generate thumbnails
        </Button>

        <Button variant="contained" onClick={() => navigate("/login")}>
          Logout
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImageChooserScreen;
