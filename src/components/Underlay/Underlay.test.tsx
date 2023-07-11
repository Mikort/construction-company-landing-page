import { render, screen } from "@testing-library/react";
import { Underlay } from "./Underlay";

describe("Underlay", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<Underlay background="">test</Underlay>);

    const element = await screen.findByTestId("Underlay");
    expect(element).toBeInTheDocument();
  });
});
