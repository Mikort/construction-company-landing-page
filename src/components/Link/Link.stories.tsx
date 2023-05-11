import { Link } from "./Link";
import { ReactComponent as OKSvg } from "icons/ok.svg";
import { ReactComponent as VKSvg } from "icons/vk.svg";

export default {
  title: "Link",
  component: Link,
};

export const NavbarLink = {
  args: {
    children: "Проекты",
    href: "",
    color: "secondary-1000",
    withUnderline: true,
  },
};

export const FooterLink = {
  args: {
    children: "О нас",
    href: "",
    color: "secondary-200",
    withUnderline: false,
  },
};

export const OKLink = {
  args: {
    children: <OKSvg />,
    href: "",
    color: "secondary-600",
    withUnderline: false,
  },
};

export const VKLink = {
  args: {
    children: <VKSvg />,
    href: "",
    color: "secondary-600",
    withUnderline: false,
  },
};
