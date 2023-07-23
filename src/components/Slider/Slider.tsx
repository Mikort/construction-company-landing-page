import React, { memo, ReactNode, useMemo } from "react";
import { BaseProps } from "src/BaseProps.interface";
import { SliderContextProvider } from "components/Slider/Slider.context";
import { SliderContainer } from "components/Slider/SliderContainer/SliderContainer";
import { SliderParameters } from "components/Slider/types";

export interface SliderProps extends BaseProps, SliderParameters {
  /**
   * Слайды (может содержать только компонент Slide)
   */
  children: ReactNode;

  /**
   * Слайд, с которого начинается отображение
   * @default 0
   */
  startSlideIndex?: number;
}

/**
 * Перелистывает содержимое с указанной периодичностью
 */
export const Slider: React.FunctionComponent<SliderProps> = memo<SliderProps>(
  function ({
    children,
    slidingIntervalMs = 3000,
    startSlideIndex = 0,
    slideTransitionSpeedMs = 1000,
    showBullets = true,
    isClickableBullets = false,
    isSwipable = false,
    id,
    testId = "Slider",
    className,
  }) {
    const slidesCount = useMemo(
      () => React.Children.count(children),
      [children]
    );

    return (
      <SliderContextProvider
        slidesCount={slidesCount}
        startSlide={startSlideIndex}
      >
        <SliderContainer
          slidingIntervalMs={slidingIntervalMs}
          slideTransitionSpeedMs={slideTransitionSpeedMs}
          showBullets={showBullets}
          isClickableBullets={isClickableBullets}
          isSwipable={isSwipable}
          id={id}
          testId={testId}
          className={className}
        >
          {children}
        </SliderContainer>
      </SliderContextProvider>
    );
  }
);
