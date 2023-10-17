import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AppContainer from ".";
import { Auth0ContextInterface, useAuth0 } from "@auth0/auth0-react";

const logout = vi.fn();
vi.mock("@auth0/auth0-react", () => ({
  useAuth0: vi.fn(() => ({
    isAuthenticated: true,
    logout,
  })),
}));

describe("App", () => {
  it("Renders title and children", () => {
    render(
      <AppContainer>
        <div>Test text</div>
      </AppContainer>
    );

    screen.getByText("Thumbnail Generator");
    screen.getByText("Test text");
  });

  it("Renders the logout button if the user is logged, and calls the Auth0 logout function when pressed", async () => {
    render(
      <AppContainer>
        <div>Test text</div>
      </AppContainer>
    );

    await userEvent.click(screen.getByText("Logout"));
    expect(logout).toHaveBeenCalledOnce();
  });

  it("Doesn't renders logout button if the user is not logged", async () => {
    vi.mocked(useAuth0).mockReturnValueOnce({
      isAuthenticated: false,
    } as Auth0ContextInterface);

    render(
      <AppContainer>
        <div>Test text</div>
      </AppContainer>
    );

    const logoutButton = screen.queryByText("Logout");
    expect(logoutButton).toBeNull();
  });
});
