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

    expect(
      screen.getByRole("link", { name: /a child's perspective, home/i }),
    ).toBeInTheDocument();

    expect(screen.getByText("Child page content")).toBeInTheDocument();

    expect(screen.getByText(/all rights reserved\./i)).toBeInTheDocument();
  });
});
