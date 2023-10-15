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

function ThumbnailViewerScreen() {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const data = useMutationState({
    filters: { mutationKey: ["thumbnails"] },
  });
  const itemData = data[data.length - 1].data;
  const mutationStatus = data[data.length - 1].status;

  const copyTextToClipboard = (text: string) => {
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
      <Typography variant="h4">Generated thumbnails</Typography>
      {mutationStatus === "success" && (
        <>
          <Typography variant="body1">
            The thumbnails were successfully generated.
          </Typography>
          <Grid container justifyContent="center" sx={{ gap: 4 }}>
            {Array.isArray(itemData) &&
              itemData.map((item, index) => (
                <Grid item key={item.label}>
                  <Grow in style={{ transitionDelay: index * 50 + "ms" }}>
                    <ImageCard>
                      <Typography variant="h6">{item.label}</Typography>
                      <ImageItem src={item.url} />
                      <Button
                        variant="contained"
                        startIcon={<ContentCopyIcon />}
                        onClick={() => {
                          copyTextToClipboard(item.url);
                          setOpenSnackbar(true);
                        }}
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
      {mutationStatus === "error" && (
        <Typography variant="body1" color="#FF4444">
          The thumbnails couldn't be generated. Try again later.
        </Typography>
      )}
      {mutationStatus === "pending" && <CircularProgress />}

      <Button variant="contained" onClick={() => navigate("/image-chooser")}>
        Choose another image
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        message="URL copied!"
      />
    </AppContainer>
  );
}

export default ThumbnailViewerScreen;
