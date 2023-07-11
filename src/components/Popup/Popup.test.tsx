import { Popup } from "./Popup";
import { render, screen } from "@testing-library/react";

describe("Popup", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<Popup>test</Popup>);

    const element = await screen.findByTestId("Popup");
    expect(element).toBeInTheDocument();
  });
});
