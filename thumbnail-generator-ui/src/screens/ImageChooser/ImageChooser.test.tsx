import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, vi } from "vitest";

import ImageChooser from ".";

vi.mock("@tanstack/react-query", () => ({
  useMutation: vi.fn(() => ({
    mutate: vi.fn(),
  })),
}));

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe("Image chooser", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders title and description", () => {
    render(<ImageChooser />);

    screen.getAllByText("Choose an image");
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
