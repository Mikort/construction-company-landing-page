import { act, fireEvent, render, screen } from "@testing-library/react";
import { Slider } from "./Slider";
import { Slide } from "./Slide/Slide";
import React from "react";
import { useSliderContext } from "components/Slider/Slider.context";

const TestComponent = (props: { dataTestId: string }) => {
  const context = useSliderContext();
  return <div data-testid={props.dataTestId}>{context.currentSlide}</div>;
};

const swipe = (
  target: Document | Element | Window | Node,
  direction: "left" | "right"
) => {
  const touchOnLeft = { clientX: 0, clientY: 0 };
  const touchOnRight = { clientX: 10, clientY: 0 };

  const touchStart = direction === "left" ? touchOnRight : touchOnLeft;
  const touchEnd = direction === "left" ? touchOnLeft : touchOnRight;

  fireEvent.touchStart(target, {
    changedTouches: [touchStart],
  });
  fireEvent.touchEnd(target, {
    changedTouches: [touchEnd],
  });
};

describe("Slider", () => {
  jest.useFakeTimers();

  it("компонент появился в DOM дереве", async () => {
    render(
      <Slider>
        <Slide>
          <div>test 1</div>
        </Slide>
      </Slider>
    );

    const element = await screen.findByTestId("Slider");
    expect(element).toBeInTheDocument();
  });

  it("слайды переключаются со временем", async () => {
    render(
      <Slider>
        <Slide>
          <TestComponent dataTestId="context-1" />
        </Slide>
        <Slide>
          <TestComponent dataTestId="context-2" />
        </Slide>
      </Slider>
    );

    const element = await screen.findByTestId("Slider");
    expect(element).toBeInTheDocument();

    const context = await screen.findByTestId("context-1");
    expect(context).toHaveTextContent("0");

    await act(() => {
      jest.runOnlyPendingTimers();
    });

    const newContext = await screen.findByTestId("context-2");
    expect(newContext).toHaveTextContent("1");
  });

  it("слайды переключаются по нажатию на bullet", async () => {
    render(
      <Slider showBullets isClickableBullets>
        <Slide>
          <TestComponent dataTestId="context-1" />
        </Slide>
        <Slide>
          <TestComponent dataTestId="context-2" />
        </Slide>
        <Slide>
          <TestComponent dataTestId="context-3" />
        </Slide>
        <Slide>
          <TestComponent dataTestId="context-4" />
        </Slide>
      </Slider>
    );

    const element = await screen.findByTestId("Slider");
    expect(element).toBeInTheDocument();

    const context = await screen.findByTestId("context-1");
    expect(context).toHaveTextContent("0");

    const bullets = await screen.findAllByTestId("Bullet");
    fireEvent.click(bullets[1]);
    expect(context).toHaveTextContent("1");

    fireEvent.click(bullets[0]);
    expect(context).toHaveTextContent("0");

    fireEvent.click(bullets[3]);
    expect(context).toHaveTextContent("3");
  });

  it("слайды переключаются по свайпу", async () => {
    render(
      <Slider isSwipable>
        <Slide>
          <TestComponent dataTestId="context-1" />
        </Slide>
        <Slide>
          <TestComponent dataTestId="context-2" />
        </Slide>
        <Slide>
          <TestComponent dataTestId="context-3" />
        </Slide>
        <Slide>
          <TestComponent dataTestId="context-4" />
        </Slide>
      </Slider>
    );

    const element = await screen.findByTestId("Slider");
    expect(element).toBeInTheDocument();

    const context = await screen.findByTestId("context-1");
    expect(context).toHaveTextContent("0");

    swipe(element, "left");
    expect(context).toHaveTextContent("1");

    swipe(element, "left");
    expect(context).toHaveTextContent("2");

    swipe(element, "right");
    expect(context).toHaveTextContent("1");

    swipe(element, "right");
    expect(context).toHaveTextContent("0");

    swipe(element, "right");
    expect(context).toHaveTextContent("3");
  });
});
