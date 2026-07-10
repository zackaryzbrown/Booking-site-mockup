import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Home } from "./Home";

describe("Home", () => {
  it("renders key hero content and calls to action", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /support for the/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen
        .getAllByRole("link", { name: /request an appointment/i })
        .some(
          (link) =>
            link.getAttribute("href") ===
            "https://achildsperspective-jm.clientsecure.me/",
        ),
    ).toBe(true);

    expect(
      screen.getByRole("link", { name: /explore services/i }),
    ).toHaveAttribute("href", "/services");

    expect(
      screen.getByText("Certified Child Life Specialists"),
    ).toBeInTheDocument();
  });
});
