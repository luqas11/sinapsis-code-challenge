// Environment variables
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const MOCK_BACKEND = import.meta.env.VITE_MOCK_BE === "true";
export const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
export const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;

// Routes paths
export const ROUTES = {
  LOGIN: "/login",
  IMAGE_CHOOSER: "/image-chooser",
  THUMBNAIL_VIEWER: "/thumbnail-viewer",
};

// Mutations keys
export const MUTATIONS = { GENERATE_THUMBNAILS: "GENERATE_THUMBNAILS" };
