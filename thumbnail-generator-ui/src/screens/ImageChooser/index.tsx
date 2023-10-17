import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  Card,
  Button,
  CardActions,
  Typography,
  CardActionArea,
  CardMedia,
  Box,
} from "@mui/material";

import { AppContainer } from "../../components";
import { ROUTES, useThumbnails } from "../../helpers";

/**
 * Screen to choose an image to generate the thumbnails with. Allows the user to pick a
 * file from it's local system, preview it, and use it for the thumbnail generation.
 */
const ImageChooserScreen = () => {
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { mutate } = useThumbnails();

  const handleGenerateThumbnails = (selectedImage: string) => {
    mutate(selectedImage);
    navigate(ROUTES.THUMBNAIL_VIEWER);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string")
          setImage(e.target.result);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  const ImageCard = styled(Card)({
    aspectRatio: "7 / 6",
    width: "100%",
    maxWidth: 350,
  });

  const ImageCardActionArea = styled(CardActionArea)({
    height: "100%",
    backgroundColor: "#333333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  });

  return (
    <AppContainer>
      <Typography variant="h4" textAlign="center">
        Choose an image
      </Typography>
      <Typography variant="body1" textAlign="center">
        Only JPEG and PNG files with a maximum size of 11MB are allowed.
        <br></br>
        Images will be automatically cropped to fit the thumbnails sizes.
      </Typography>
      <ImageCard>
        <ImageCardActionArea {...{ component: "label" }}>
          <input
            style={{ display: "none" }}
            type="file"
            accept=".jpeg, .png"
            onChange={handleImageChange}
          />
          {image ? (
            <CardMedia
              component="img"
              image={image}
              sx={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AddPhotoAlternateIcon sx={{ fontSize: 100 }} />
              <Typography variant="body1" textAlign="center">
                Choose an image from your local files.
              </Typography>
            </Box>
          )}
        </ImageCardActionArea>
      </ImageCard>
      <CardActions>
        <Button
          variant="contained"
          size="large"
          disabled={!image}
          onClick={() => handleGenerateThumbnails(image)}
        >
          Generate thumbnails
        </Button>
      </CardActions>
    </AppContainer>
  );
};

export default ImageChooserScreen;
