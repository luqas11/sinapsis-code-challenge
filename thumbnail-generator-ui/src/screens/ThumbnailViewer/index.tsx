import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useNavigate } from "react-router-dom";
import { useMutationState } from "@tanstack/react-query";

function ThumbnailViewerScreen() {
  const navigate = useNavigate();
  const data = useMutationState({
    filters: { mutationKey: ["thumbnails"] },
  });
  const itemData = data[data.length - 1]?.data;

  return (
    <Card
      sx={{
        maxWidth: 350,
        backgroundColor: "#AAAAFF",
      }}
    >
      <CardContent>
        <Typography variant="h4">Generated thumbnails</Typography>
        <Typography variant="body1">
          The thumbnails were successfully generated.
        </Typography>
      </CardContent>
      <ImageList>
        {Array.isArray(itemData) &&
          itemData.map((item) => (
            <ImageListItem key={item}>
              <img
                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item}?w=164&h=164&fit=crop&auto=format`}
              />
              <Button variant="contained" startIcon={<ContentCopyIcon />}>
                Copy URL
              </Button>
            </ImageListItem>
          ))}
      </ImageList>
      <CardActions>
        <Button variant="contained" onClick={() => navigate("/image-chooser")}>
          Choose another image
        </Button>

        <Button variant="contained" onClick={() => navigate("/login")}>
          Logout
        </Button>
      </CardActions>
    </Card>
  );
}

export default ThumbnailViewerScreen;
