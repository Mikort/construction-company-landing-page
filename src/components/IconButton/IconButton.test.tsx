import { fireEvent, render, screen } from "@testing-library/react";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("компонент появился в DOM дереве", async () => {
    const onClick = jest.fn();

    render(
      <IconButton onClick={onClick} testId={"IconButton"}>
        test
      </IconButton>
    );

    const element = await screen.findByTestId("IconButton");
    expect(element).toBeInTheDocument();
  });

  it("должен вызваться onClick 1 раз", async () => {
    const onClick = jest.fn();

    render(
      <IconButton onClick={onClick} testId={"IconButton"}>
        Test button
      </IconButton>
    );

    const element = await screen.findByTestId("IconButton");

    fireEvent.click(element);
    expect(onClick).toBeCalledTimes(1);
  });

  it("не должен вызваться onClick при наличии свойства disabled", async () => {
    const onClick = jest.fn();

    render(
      <IconButton onClick={onClick} disabled testId={"IconButton"}>
        Test button
      </IconButton>
    );

    const element = await screen.findByTestId("IconButton");

    fireEvent.click(element);
    expect(onClick).not.toBeCalled();
  });
});
