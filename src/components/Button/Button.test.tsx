import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("компонент появился в DOM дереве", async () => {
    const onClick = jest.fn();

    render(
      <Button color="primary" size="medium" onClick={onClick} testId={"Button"}>
        Test button
      </Button>
    );

    const element = await screen.findByTestId("Button");
    expect(element).toBeInTheDocument();
  });

  it("должен вызваться onClick 1 раз", async () => {
    const onClick = jest.fn();

    render(
      <Button color="primary" size="medium" onClick={onClick} testId={"Button"}>
        Test button
      </Button>
    );

    const element = await screen.findByTestId("Button");

    fireEvent.click(element);
    expect(onClick).toBeCalledTimes(1);
  });

  it("не должен вызваться onClick при наличии свойства disabled", async () => {
    const onClick = jest.fn();

    render(
      <Button
        color="primary"
        size="medium"
        onClick={onClick}
        testId={"Button"}
        disabled
      >
        Test button
      </Button>
    );

    const element = await screen.findByTestId("Button");

    fireEvent.click(element);
    expect(onClick).not.toBeCalled();
  });
});
