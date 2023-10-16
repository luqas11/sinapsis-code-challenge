import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  ImageChooserScreen,
  LoginScreen,
  ThumbnailViewerScreen,
} from "../screens";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "../helpers";

/**
 * Main app router. Implements login, image chooser and thumbnail viewer routes, handling
 * authorization logic to navigate the user to the public or protected routes depending on
 * it's authorization state.
 */
const CustomRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        <Route
          path={ROUTES.LOGIN}
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.IMAGE_CHOOSER}
          element={
            <ProtectedRoute>
              <ImageChooserScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.THUMBNAIL_VIEWER}
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
