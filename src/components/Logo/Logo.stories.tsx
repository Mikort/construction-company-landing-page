import { Logo, LogoProps } from "./Logo";
import { StoryContext } from "@storybook/react";

export default {
  title: "Logo",
  component: Logo,
  decorators: [
    (Story: any, context: StoryContext<LogoProps>) => {
      return (
        <div
          style={{
            backgroundColor:
              context.args.color === "secondary-0" ? "#CACACA" : undefined,
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

export const Default = {
  args: {
    children: "Logo default",
  },
};
