import { StoryObj } from "@storybook/react";
import { Stack, StackProps } from "./Stack";
import { Text } from "components/Text/Text";

export default {
  title: "Stack",
  component: Stack,
};

// TODO скриншотные тесты
export const Default: StoryObj<StackProps> = {
  args: {
    children: (
      <>
        <Text>element 1123123</Text>
        <Text>element 2</Text>
        <Text>element 3</Text>
        <Text>element 4</Text>
        <Text>element 5</Text>
        <Text>element 6</Text>
      </>
    ),
  },
};
