import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<Logo />);

    const element = await screen.findByTestId("Logo");
    expect(element).toBeInTheDocument();
  });
});
