import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<Text>test</Text>);

    const element = await screen.findByTestId("Text");
    expect(element).toBeInTheDocument();
  });
});
