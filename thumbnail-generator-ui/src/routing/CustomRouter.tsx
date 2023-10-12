import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ImageChooserScreen,
  LoginScreen,
  ThumbnailViewerScreen,
} from "../screens";

const CustomRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/image-chooser" element={<ImageChooserScreen />} />
        <Route path="/thumbnail-viewer" element={<ThumbnailViewerScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
