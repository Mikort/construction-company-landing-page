import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<Header>Test Header</Header>);

    const element = await screen.findByTestId("Header");
    expect(element).toBeInTheDocument();
  });
});
