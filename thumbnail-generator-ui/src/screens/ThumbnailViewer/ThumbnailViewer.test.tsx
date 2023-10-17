import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { useMutationState } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import ThumbnailViewer from ".";

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

vi.mock("@tanstack/react-query", () => ({
  useMutationState: vi.fn(() => [
    {
      status: "success",
      data: MOCK_VALUES,
    },
  ]),
}));

describe("Thumbnail viewer", () => {
  it("Renders title", () => {
    render(
      <BrowserRouter>
        <ThumbnailViewer />
      </BrowserRouter>
    );

    screen.getAllByText("Generated thumbnails");
  });

  it("Renders success message and items labels", () => {
    render(
      <BrowserRouter>
        <ThumbnailViewer />
      </BrowserRouter>
    );

    screen.getByText("The thumbnails were successfully generated.");
    screen.getByText(MOCK_VALUES[0].label);
    screen.getByText(MOCK_VALUES[1].label);
    screen.getByText(MOCK_VALUES[2].label);
  });

  it("Renders error message", async () => {
    vi.mocked(useMutationState).mockReturnValueOnce([
      {
        status: "error",
      },
    ]);

    render(
      <BrowserRouter>
        <ThumbnailViewer />
      </BrowserRouter>
    );

    screen.getByText("The thumbnails couldn't be generated. Try again later.");
  });

  it("Doesn't renders messages if loading", async () => {
    vi.mocked(useMutationState).mockReturnValueOnce([
      {
        status: "pending",
      },
    ]);

    render(
      <BrowserRouter>
        <ThumbnailViewer />
      </BrowserRouter>
    );

    const errorMessage = screen.queryByText(
      "The thumbnails couldn't be generated. Try again later."
    );
    const successMessage = screen.queryByText(
      "The thumbnails were successfully generated."
    );
    expect(errorMessage).toBeNull();
    expect(successMessage).toBeNull();
  });
});
