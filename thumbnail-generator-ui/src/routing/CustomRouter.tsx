import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  ImageChooserScreen,
  LoginScreen,
  ThumbnailViewerScreen,
} from "../screens";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

/**
 * Main app router. Implements login, image chooser and thumbnail viewer routes, handling
 * authorization logic to navigate the user to the public or protected routes depending on
 * it's authorization state.
 */
const CustomRouter = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_ROUTE_BASENAME}>
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
