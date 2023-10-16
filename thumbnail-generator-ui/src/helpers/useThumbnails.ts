import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { BACKEND_URL, MOCK_BACKEND, MUTATIONS } from "./constants";

const MOCK_DELAY = 2000;
const MOCK_VALUES = [
  {
    label: "120x120",
    url: "/mock_images/120x120.png",
  },
  {
    label: "160x120",
    url: "/mock_images/160x120.png",
  },
  {
    label: "400x300",
    url: "/mock_images/400x300.png",
  },
];

/**
 * Hook to encapsulate server state logic through a Tanstack Query mutation.
 */
const useThumbnails = () => {
  return useMutation({
    mutationKey: [MUTATIONS.GENERATE_THUMBNAILS],
    mutationFn: async (selectedImage: string) => {
      // If the env var is true, override the API call and return a hardcoded response with a faked delay
      if (MOCK_BACKEND) {
        await new Promise((r) => setTimeout(r, MOCK_DELAY));
        return MOCK_VALUES;
      }
      // Otherwise, make the real API call and return it's response
      const response = await axios.post(BACKEND_URL + "/generate-thumbnails", {
        image: selectedImage,
      });
      return response.data;
    },
  });
};

export default useThumbnails;
