import { useMutation } from "@tanstack/react-query";
import axios from "axios";

/**
 * Hook to encapsulate server state logic through a Tanstack Query mutation.
 */
const useThumbnails = () => {
  const mockValues = [
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
  const mockDelay = 2000;

  return useMutation({
    mutationKey: ["thumbnails"],
    mutationFn: async (selectedImage: string) => {
      const mockBackend = import.meta.env.VITE_MOCK_BE === "true";
      if (mockBackend) {
        await new Promise((r) => setTimeout(r, mockDelay));
        return mockValues;
      } else {
        const response = await axios.get(
          "http://localhost:3000/get-thumbnails",
          {
            data: { image: selectedImage },
          }
        );
        return response.data;
      }
    },
  });
};

export default useThumbnails;
