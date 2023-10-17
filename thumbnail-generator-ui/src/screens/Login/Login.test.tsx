import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from ".";

const loginWithRedirect = vi.fn();

vi.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    loginWithRedirect,
  }),
}));

describe("Login", () => {
  it("Renders title and description", () => {
    render(<Login />);

    screen.getAllByText("Thumbnail Generator");
    screen.getByText(
      "A high quality, ultra-fast, and extremely useful thumbnail generator."
    );
  });

  it("Renders the login button and calls the Auth0 login function", async () => {
    render(<Login />);

    await userEvent.click(screen.getByText("Login to continue"));
    expect(loginWithRedirect).toHaveBeenCalledOnce();
  });
});
