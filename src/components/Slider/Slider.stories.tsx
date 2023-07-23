import { StoryFn } from "@storybook/react";
import { Slider, SliderProps } from "./Slider";
import { Slide } from "./Slide/Slide";
import building2 from "images/building-2.jpg";
import building3 from "images/building-3.jpg";
import building4 from "images/building-4.jpg";
import building5 from "images/building-5.jpg";
import { Image } from "components/Image/Image";
import React from "react";

export default {
  title: "Slider",
  component: Slider,
  parameters: {
    layout: "fullheight",
  },
};

export const Default: StoryFn<SliderProps> = (props) => {
  return (
    <Slider {...props}>
      <Slide>
        <Image src={building2} alt="building 2" />
      </Slide>
      <Slide>
        <Image src={building3} alt="building 3" />
      </Slide>
      <Slide>
        <Image src={building4} alt="building 4" />
      </Slide>
      <Slide>
        <Image src={building5} alt="building 5" />
      </Slide>
    </Slider>
  );
};
