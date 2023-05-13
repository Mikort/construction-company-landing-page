import { Card } from "./Card";
import { ReactComponent as Box } from "icons/BoxWithBackgroundCircle.svg";

export default {
  title: "Card",
  component: Card,
};

export const Default = {
  args: {
    icon: <Box />,
    header: "Консультация с широким активом",
    description:
      "А также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для как самодостаточных, так и внешне зависимых концептуальных решений",
  },
};
