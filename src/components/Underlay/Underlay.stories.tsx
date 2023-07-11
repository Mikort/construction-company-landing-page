import { StoryObj } from "@storybook/react";
import { Underlay, UnderlayProps } from "./Underlay";
import { Button } from "components/Button/Button";
import { Slider } from "components/Slider/Slider";
import { Slide } from "components/Slider/Slide/Slide";
import { Image } from "components/Image/Image";
import building5 from "images/building-5.jpg";
import building2 from "images/building-2.jpg";
import building3 from "images/building-3.jpg";
import building4 from "images/building-4.jpg";
import React from "react";
import { Text } from "components/Text/Text";
import { Article } from "components/Article/Article";
import { Stack } from "components/Stack/Stack";

export default {
  title: "Underlay",
  component: Underlay,
};

export const Default: StoryObj<UnderlayProps> = {
  args: {
    children: (
      <Stack direction="column" gap="90px">
        <Article gap="24px" maxWidth="860px">
          <Text
            color="secondary-0"
            fontSize="60px"
            fontWeight="800"
            lineHeight="85px"
          >
            Проектные решения любой сложности
          </Text>
          <Text
            color="secondary-0"
            fontSize="20px"
            lineHeight="30px"
            fontWeight="700"
          >
            Есть над чем задуматься: базовые сценарии поведения пользователей и
            по сей день остаются уделом проектантов
          </Text>
        </Article>
        <Button color="primary" size="medium" onClick={() => {}}>
          Заказать рассчет
        </Button>
      </Stack>
    ),

    background: (
      <Slider isClickableBullets>
        <Slide>
          <Image src={building5} alt="building 5" />
        </Slide>
        <Slide>
          <Image src={building2} alt="building 2" />
        </Slide>
        <Slide>
          <Image src={building3} alt="building 3" />
        </Slide>
        <Slide>
          <Image src={building4} alt="building 4" />
        </Slide>
      </Slider>
    ),
  },
};
