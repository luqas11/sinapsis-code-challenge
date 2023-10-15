import { useMutation } from "@tanstack/react-query";
import axios from "axios";

/**
 * Hook to encapsulate server state logic through a Tanstack Query mutation.
 */
const useThumbnails = () => {
  return useMutation({
    mutationKey: ["thumbnails"],
    mutationFn: async (selectedImage: string) => {
      const response = await axios.get("http://localhost:3000/get-thumbnails", {
        data: { image: selectedImage },
      });
      return response.data;
    },
  });
};

export default useThumbnails;
