import { fireEvent, render, screen } from "@testing-library/react";
import { Input, InputProps } from "./Input";
import { ChangeEvent, useCallback, useState } from "react";
import userEvent from "@testing-library/user-event";

const ControlledInput = (props: InputProps) => {
  const [value, setValue] = useState(props.value);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      props.onChange?.(event);
    },
    [props, setValue]
  );

  return <Input {...props} value={value} onChange={onChangeHandler} />;
};

describe("Input", () => {
  it("компонент  (uncontrolled) появился в DOM дереве", async () => {
    render(<Input testId="Input" />);

    const element = await screen.findByTestId("Input");
    expect(element).toBeInTheDocument();
  });

  it("компонент (controlled) появился в DOM дереве", async () => {
    render(<ControlledInput testId="Input" />);

    const element = await screen.findByTestId("Input");
    expect(element).toBeInTheDocument();
  });

  it("должен вызваться onChange", async () => {
    const setValue = jest.fn();

    render(
      <Input
        value={""}
        onChange={(event) => setValue(event.target.value)}
        testId="Input"
      />
    );

    const element = await screen.findByTestId("Input");

    fireEvent.change(element, { target: { value: "test input" } });

    expect(setValue).toBeCalledWith("test input");
  });

  it('должен добавить символ "*" к концу placeholder при наличии свойства required', async () => {
    render(<Input testId="Input" required={true} placeholder={"test"} />);

    const element: HTMLInputElement = await screen.findByTestId("Input");
    expect(element.placeholder).toBe("test*");
  });

  it("не должен вызваться onChange при наличии свойства disabled", async () => {
    const setValue = jest.fn();

    render(
      <Input
        value={""}
        onChange={(event) => setValue(event.target.value)}
        disabled={true}
        testId="Input"
      />
    );

    const element = await screen.findByTestId("Input");

    await userEvent.type(element, "test");

    expect(setValue).not.toBeCalled();
  });
});
