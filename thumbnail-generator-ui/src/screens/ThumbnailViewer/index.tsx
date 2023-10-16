import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutationState } from "@tanstack/react-query";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { styled } from "@mui/system";
import {
  Button,
  Typography,
  CircularProgress,
  Grid,
  Card,
  Grow,
  Snackbar,
} from "@mui/material";

import { AppContainer } from "../../components";
import { MUTATIONS, ROUTES } from "../../helpers";

/**
 * Screen to display the generated thumbnails and allow the user to copy it's URLs.
 */
const ThumbnailViewerScreen = () => {
  const navigate = useNavigate();
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const data = useMutationState({
    filters: { mutationKey: [MUTATIONS.GENERATE_THUMBNAILS] },
  });
  const thumbnailsData = data[data.length - 1]?.data;
  const mutationStatus = data[data.length - 1]?.status;

  const closeSnackbar = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpenSnackbar(false);
  };

  const handleCopyURL = (text: string) => {
    setIsOpenSnackbar(true);
    navigator.clipboard.writeText(text);
  };

  const ImageCard = styled(Card)({
    height: 270,
    width: 200,
    backgroundColor: "#333333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 14,
    padding: 10,
  });

  const ImageItem = styled("img")({
    objectFit: "contain",
    width: "100%",
    height: "100%",
  });

  return (
    <AppContainer>
      <Typography variant="h4" textAlign="center">
        Generated thumbnails
      </Typography>
      {mutationStatus === "success" && (
        <>
          <Typography variant="body1" textAlign="center">
            The thumbnails were successfully generated.
          </Typography>
          <Grid container justifyContent="center" sx={{ gap: 4 }}>
            {Array.isArray(thumbnailsData) &&
              thumbnailsData.map((item, index) => (
                <Grid item key={item.label}>
                  <Grow in style={{ transitionDelay: index * 50 + "ms" }}>
                    <ImageCard>
                      <Typography variant="h6">{item.label}</Typography>
                      <ImageItem src={item.url} />
                      <Button
                        variant="contained"
                        startIcon={<ContentCopyIcon />}
                        onClick={() => handleCopyURL(item.url)}
                      >
                        Copy URL
                      </Button>
                    </ImageCard>
                  </Grow>
                </Grid>
              ))}
          </Grid>
        </>
      )}
      {mutationStatus === "pending" && <CircularProgress />}
      {mutationStatus !== "pending" && mutationStatus !== "success" && (
        <Typography variant="body1" color="#FF4444" textAlign="center">
          The thumbnails couldn't be generated. Try again later.
        </Typography>
      )}
      <Button
        variant="contained"
        onClick={() => navigate(ROUTES.IMAGE_CHOOSER)}
      >
        Choose another image
      </Button>
      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        message="URL copied!"
      />
    </AppContainer>
  );
};

export default ThumbnailViewerScreen;
