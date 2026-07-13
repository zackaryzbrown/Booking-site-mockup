import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { Root } from "./Root";

describe("Root layout", () => {
  it("renders header, footer, and the active child route", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/",
          Component: Root,
          children: [
            {
              index: true,
              element: <div>Child page content</div>,
            },
          ],
        },
      ],
      { initialEntries: ["/"] },
    );

    render(<RouterProvider router={router} />);

    // Verify skip link for keyboard navigation
    expect(
      screen.getByRole("link", { name: /skip to main content/i }),
    ).toBeInTheDocument();

    // Verify logo/home link
    expect(
      screen.getByRole("link", {
        name: /a child's perspective, return to home/i,
      }),
    ).toBeInTheDocument();

    // Verify main content region
    expect(screen.getByRole("main")).toBeInTheDocument();

    expect(screen.getByText("Child page content")).toBeInTheDocument();

    expect(screen.getByText(/all rights reserved\./i)).toBeInTheDocument();
  });
});
