import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("shows a confirmation state after submitting the form", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText(/your name/i), "Test Parent");
    await user.type(screen.getByLabelText(/^email/i), "parent@example.com");
    await user.type(
      screen.getByLabelText(/what's on your mind\?/i),
      "Checking in about support options.",
    );

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /thank you, your message is on its way\./i,
      }),
    ).toBeInTheDocument();
  });
});
