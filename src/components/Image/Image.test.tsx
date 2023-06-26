import { Image } from "./Image";
import { render, screen } from "@testing-library/react";

describe("Image", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<Image src="" alt="" />);

    const element = await screen.findByTestId("Image");
    expect(element).toBeInTheDocument();
  });
});
