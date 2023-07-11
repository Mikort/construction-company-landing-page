import { Popup, PopupProps } from "./Popup";
import { StoryObj } from "@storybook/react";

export default {
  title: "Popup",
  component: Popup,
};

export const Default: StoryObj<PopupProps> = {
  args: {
    children: "Default Popup",
  },
};
