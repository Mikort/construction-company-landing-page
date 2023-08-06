import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<Divider />);

    const element = await screen.findByTestId("Divider");
    expect(element).toBeInTheDocument();
  });
});
