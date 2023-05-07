import { Input, InputProps } from "./Input";
import { useState } from "react";

const InteractiveInput = (props: InputProps) => {
  const [value, setValue] = useState(props.value);
  return (
    <Input
      {...props}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default {
  title: "Input",
  component: Input,
};

export const Interactive = {
  args: {
    placeholder: "Type here...",
    value: "Initial value",
  },
  render: (args: InputProps) => <InteractiveInput {...args} />,
};

export const Required = {
  args: {
    placeholder: "Type here...",
    required: true,
  },
  render: (args: InputProps) => <InteractiveInput {...args} />,
};

export const Uncontrolled = {
  args: {
    placeholder: "Uncontrolled",
  },
};
