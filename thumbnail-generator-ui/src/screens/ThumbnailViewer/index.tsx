import {
  Button,
  Typography,
  CircularProgress,
  Grid,
  Card,
  Grow,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useNavigate } from "react-router-dom";
import { useMutationState } from "@tanstack/react-query";
import { AppContainer } from "../../components";
import { styled } from "@mui/system";

function ThumbnailViewerScreen() {
  const navigate = useNavigate();
  const data = useMutationState({
    filters: { mutationKey: ["thumbnails"] },
  });
  const itemData = data[data.length - 1]?.data;

  const CustomImageListItem = styled(Card)({
    height: 200,
    width: 250,
    backgroundColor: "#333333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
  });

  const ImageItem = styled("img")({
    objectFit: "contain",
    width: "100%",
    height: "100%",
  });

  return (
    <AppContainer>
      <Typography variant="h4">Generated thumbnails</Typography>
      <Typography variant="body1">
        The thumbnails were successfully generated.
      </Typography>
      <Grid container justifyContent="center" sx={{ gap: 4 }}>
        {Array.isArray(itemData) ? (
          itemData.map((item, index) => (
            <Grid item key={item}>
              <Grow in style={{ transitionDelay: String(index * 30) + "ms" }}>
                <CustomImageListItem>
                  <ImageItem
                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                  />
                  <Button variant="contained" startIcon={<ContentCopyIcon />}>
                    Copy URL
                  </Button>
                </CustomImageListItem>
              </Grow>
            </Grid>
          ))
        ) : (
          <CircularProgress />
        )}
      </Grid>
      <Button variant="contained" onClick={() => navigate("/image-chooser")}>
        Choose another image
      </Button>
    </AppContainer>
  );
}

export default ThumbnailViewerScreen;
