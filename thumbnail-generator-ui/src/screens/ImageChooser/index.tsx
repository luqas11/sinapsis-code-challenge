import { useState } from "react";
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
import { useThumbnails } from "../../helpers";

function ImageChooserScreen() {
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { mutate } = useThumbnails();

  const getThumbnails = (selectedImage: string) => {
    mutate(selectedImage);
    navigate("/thumbnail-viewer");
  };

  const ImageCardActionArea = styled(CardActionArea)({
    height: 300,
    width: 350,
    backgroundColor: "#333333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <>
      <AppContainer>
        <Typography variant="h4">Choose an image</Typography>
        <Typography variant="body1" textAlign="center">
          Only JPEG and PNG files with a maximum size of 11MB are allowed.
          <br></br>
          Images will be automatically cropped to fit the thumbnails sizes.
        </Typography>
        <Card>
          <ImageCardActionArea
            onClick={() => setImage("../../../mock_images/original.jpg")}
          >
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
                <Typography variant="body1">
                  Choose an image from your local files.
                </Typography>
              </Box>
            )}
          </ImageCardActionArea>
        </Card>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            disabled={!image}
            onClick={() => getThumbnails(image)}
          >
            Generate thumbnails
          </Button>
        </CardActions>
      </AppContainer>
    </>
  );
}

export default ImageChooserScreen;
