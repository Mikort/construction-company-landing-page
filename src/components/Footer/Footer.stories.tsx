import { Footer } from "./Footer";
import { StoryContext } from "@storybook/react";

export default {
  title: "Footer",
  component: Footer,
  decorators: [
    (Story: any, context: StoryContext) => {
      return (
        <div
          style={{
            minHeight: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
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
    children: (
      <p style={{ color: "white" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        cupiditate dicta dolore, dolorem doloremque ea earum error ex excepturi
        illo, incidunt ipsam, labore magni molestiae mollitia odio optio
        reiciendis sequi sint voluptas. Architecto cum cupiditate exercitationem
        recusandae. Animi consequuntur debitis dolor esse illum mollitia nisi
        numquam quam quis temporibus? Vel.S
      </p>
    ),
  },
};
