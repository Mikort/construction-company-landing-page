import { StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Text",
  component: Text,
};

export const Default: StoryObj<TextProps> = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};
