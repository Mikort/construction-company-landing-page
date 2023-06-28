import { StoryContext, StoryObj } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "Clicked" } },
  decorators: [
    (Story: any, context: StoryContext) => {
      return (
        <div
          style={{
            backgroundColor: context.args.isTransparent ? "#CACACA" : undefined,
            display: "inline-block",
            padding: "20px",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export const PrimaryMedium: StoryObj = {
  args: {
    color: "primary",
    children: "Заказать расчёт",
    isTransparent: false,
    size: "medium",
  },
};

export const SecondarySmallTransparent: StoryObj = {
  args: {
    color: "secondary",
    children: "Договор",
    isTransparent: true,
    size: "small",
  },
};

export const PrimarySmallTransparent: StoryObj = {
  args: {
    color: "primary",
    children: "Подробнее",
    isTransparent: true,
    size: "small",
  },
};
