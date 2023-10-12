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

function ThumbnailViewerScreen() {
  const itemData = [
    "../../../mock_images/120x120.png",
    "../../../mock_images/160x120.png",
    "../../../mock_images/400x300.png",
  ];

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
        {itemData.map((item) => (
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
        <Button variant="contained">Choose another image</Button>
        <Button variant="contained">Logout</Button>
      </CardActions>
    </Card>
  );
}

export default ThumbnailViewerScreen;
