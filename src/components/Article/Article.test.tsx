import { render, screen } from "@testing-library/react";
import { Article } from "./Article";

describe("Article", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<Article>test</Article>);

    const element = await screen.findByTestId("Article");
    expect(element).toBeInTheDocument();
  });
});
