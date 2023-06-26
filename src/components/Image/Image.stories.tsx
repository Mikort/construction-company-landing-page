import { StoryObj } from "@storybook/react";
import { Image } from "./Image";
import building1 from "images/building-1.jpg";

export default {
  title: "Image",
  component: Image,
};

export const Default: StoryObj = {
  args: {
    src: building1,
    alt: "Building 1",
  },
};
