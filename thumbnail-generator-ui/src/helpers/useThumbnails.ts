import { useMutation } from "@tanstack/react-query";
import axios from "axios";

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
