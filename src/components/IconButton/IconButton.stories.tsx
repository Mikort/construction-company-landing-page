import { IconButton } from "./IconButton";
import { ReactComponent as ThreeLines } from "icons/three-lines.svg";
import { ReactComponent as Cross } from "icons/cross.svg";

export default {
  title: "IconButton",
  component: IconButton,
};

export const MenuButton = {
  args: {
    children: <ThreeLines />,
    onClick: () => {},
  },
};

export const CloseButton = {
  args: {
    children: <Cross />,
    onClick: () => {},
  },
};
