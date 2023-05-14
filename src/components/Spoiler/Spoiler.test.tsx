import { act, render, screen } from "@testing-library/react";
import { Spoiler } from "./Spoiler";
import userEvent from "@testing-library/user-event";

describe("Spoiler", () => {
  it("компонент появился в DOM дереве", async () => {
    render(
      <Spoiler testId={"Spoiler"} label={"test"}>
        Test content
      </Spoiler>
    );

    const element = await screen.findByTestId("Spoiler");
    expect(element).toBeInTheDocument();
  });

  it("компонент раскрыт при переданном параметре isOpen=true", async () => {
    render(
      <Spoiler testId={"Spoiler"} label={"test"} isOpen={true}>
        <p data-testid="content">Test content</p>
      </Spoiler>
    );

    const contentElement = await screen.findByTestId("content");
    expect(contentElement).toBeVisible();
  });

  it("компонент закрыт при переданном параметре isOpen=false", async () => {
    render(
      <Spoiler testId={"Spoiler"} label={"test"} isOpen={false}>
        <p data-testid="content">Test content</p>
      </Spoiler>
    );

    const contentElement = await screen.findByTestId("content");
    expect(contentElement).not.toBeVisible();
  });

  it("компонент открывается/закрывается при нажатии на заголовок", async () => {
    render(
      <Spoiler testId={"Spoiler"} label={"test"} isOpen={true}>
        Test content
      </Spoiler>
    );

    const element = await screen.findByTestId("Spoiler.summary");

    const contentElement = await screen.findByTestId("Spoiler.content");
    expect(contentElement).toBeVisible();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(element);
    });
    expect(contentElement).not.toBeVisible();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(element);
    });
    expect(contentElement).toBeVisible();
  });
});
