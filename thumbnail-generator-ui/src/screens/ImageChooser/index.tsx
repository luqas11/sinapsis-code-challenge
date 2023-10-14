import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ImageChooserScreen() {
  const navigate = useNavigate();
  const image = "../../../mock_images/original.jpg";

  const mutation = useMutation({
    mutationKey: ["thumbnails"],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mutationFn: async (selectedImage: string) => {
      const response = await axios.get("http://localhost:3000/get-thumbnails");
      const thumbnailArray = Object.values(response.data);
      return thumbnailArray;
    },
  });

  const getThumbnails = (selectedImage: string) => {
    mutation.mutate(selectedImage);
    navigate("/thumbnail-viewer");
  };

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
        {mutation.isPending ? (
          "Loading..."
        ) : (
          <CardMedia component="img" image={image} />
        )}
      </CardContent>
      <CardActions>
        <Button variant="contained">Choose image</Button>

        <Button variant="contained" onClick={() => getThumbnails(image)}>
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
