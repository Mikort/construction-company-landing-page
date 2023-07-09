import { render, screen } from "@testing-library/react";
import { ImageCard } from "./ImageCard";
import builder from "images/builder.jpg";

describe("ImageCard", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<ImageCard imageSrc={builder}>Test ImageCard</ImageCard>);

    const element = await screen.findByTestId("ImageCard");
    expect(element).toBeInTheDocument();
  });
});
