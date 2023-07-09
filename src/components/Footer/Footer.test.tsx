import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<Footer>Test Footer</Footer>);

    const element = await screen.findByTestId("Footer");
    expect(element).toBeInTheDocument();
  });
});
