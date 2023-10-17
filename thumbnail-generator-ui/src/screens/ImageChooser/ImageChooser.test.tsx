import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import ImageChooser from ".";

vi.mock("@tanstack/react-query", () => ({
  useMutation: () => ({
    mutate: () => {},
  }),
}));

describe("Image chooser", () => {
  it("Renders title and description", () => {
    render(
      <BrowserRouter>
        <ImageChooser />
      </BrowserRouter>
    );

    screen.getByText("Choose an image");
    screen.getByText(
      "Only JPEG and PNG files with a maximum size of 11MB are allowed.",
      { exact: false }
    );
    screen.getByText(
      "Images will be automatically cropped to fit the thumbnails sizes.",
      { exact: false }
    );
  });
});
