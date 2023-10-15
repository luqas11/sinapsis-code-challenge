import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, vi } from "vitest";
import AppContainer from ".";

vi.mock("@auth0/auth0-react", () => {
  return {
    useAuth0: () => {
      return {
        isAuthenticated: true,
      };
    },
  };
});

describe("App", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders title", () => {
    render(
      <AppContainer>
        <div>Test text</div>
      </AppContainer>
    );

    screen.getByText("Thumbnail Generator");
  });

  it("Renders children", () => {
    render(
      <AppContainer>
        <div>Test text</div>
      </AppContainer>
    );

    screen.getByText("Test text");
  });

  it("Renders logout button", () => {
    render(
      <AppContainer>
        <div>Test text</div>
      </AppContainer>
    );

    screen.getByText("Logout");
  });
});
