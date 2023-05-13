import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import { ReactComponent as BoxWithBackground } from "icons/BoxWithBackgroundCircle.svg";

describe("Card", () => {
  it("компонент появился в DOM дереве", async () => {
    render(
      <Card
        header="test header"
        icon={<BoxWithBackground />}
        description="test description"
        testId="Card"
      />
    );

    const element = await screen.findByTestId("Card");
    expect(element).toBeInTheDocument();
  });
});
