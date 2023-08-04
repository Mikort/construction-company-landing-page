import { render, screen } from "@testing-library/react";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<Stack>test</Stack>);

    const element = await screen.findByTestId("Stack");
    expect(element).toBeInTheDocument();
  });
});
