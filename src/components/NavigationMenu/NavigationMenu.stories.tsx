import { NavigationMenu, NavigationMenuProps } from "./NavigationMenu";
import { StoryObj } from "@storybook/react";
import { Link } from "components/Link/Link";

export default {
  title: "NavigationMenu",
  component: NavigationMenu,
};

export const Default: StoryObj<NavigationMenuProps> = {
  args: {
    children: (
      <>
        <Link color="secondary-1000" href="">
          link 1
        </Link>
        <Link color="secondary-1000" href="">
          link 2
        </Link>
        <Link color="secondary-1000" href="">
          link 2 sad asda sdas asd
        </Link>
        <Link color="secondary-1000" href="">
          link 4
        </Link>
        <Link color="secondary-1000" href="">
          link 5
        </Link>
        <Link color="secondary-1000" href="">
          link 6
        </Link>
        <Link color="secondary-1000" href="">
          link 7
        </Link>
      </>
    ),
    type: "horizontal",
  },
};
