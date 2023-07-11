import { render, screen } from "@testing-library/react";
import { Section } from "./Section";
import { Text } from "components/Text/Text";

describe("Section", () => {
  it("компонент появился в DOM дереве", async () => {
    render(
      <Section header="test">
        <Text>Test Section</Text>
      </Section>
    );

    const element = await screen.findByTestId("Section");
    expect(element).toBeInTheDocument();
  });
});
