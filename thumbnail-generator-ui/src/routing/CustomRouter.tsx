import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  ImageChooserScreen,
  LoginScreen,
  ThumbnailViewerScreen,
} from "../screens";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const CustomRouter = () => {
  return (
    <BrowserRouter basename="/sinapsis-code-challenge">
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/image-chooser"
          element={
            <ProtectedRoute>
              <ImageChooserScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/thumbnail-viewer"
          element={
            <ProtectedRoute>
              <ThumbnailViewerScreen />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
