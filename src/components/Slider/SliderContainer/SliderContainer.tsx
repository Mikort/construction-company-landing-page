import React, {
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import styleClasses from "./SliderContainer.module.css";
import block from "bem-css-modules";
import { mixClasses } from "utils/mixClasses";
import { Bullets } from "components/Slider/Bullets/Bullets";
import { useSliderContext } from "components/Slider/Slider.context";
import { BaseProps } from "src/BaseProps.interface";
import { SliderParameters } from "components/Slider/types";
import { useSwipe } from "hooks/useSwipe";

const classes = block(styleClasses);

export interface SliderContainerProps extends BaseProps, SliderParameters {
  /**
   * Слайды (может только содержать копонент Slide)
   */
  children: ReactNode;
}

/**
 * Контейнер для слайдов
 */
export const SliderContainer: React.FunctionComponent<SliderContainerProps> =
  memo<SliderContainerProps>(function ({
    children,
    slidingIntervalMs = 3000,
    slideTransitionSpeedMs = 1000,
    showBullets = true,
    isClickableBullets = false,
    isSwipable = false,
    id,
    testId = "SliderContainer",
    className,
  }) {
    const {
      currentSlide,
      slidesCount,
      setCurrentSlide,
      moveToNext,
      moveToPrevious,
    } = useSliderContext();

    const interval = useRef<NodeJS.Timer>();
    useEffect(() => {
      interval.current = setInterval(moveToNext, slidingIntervalMs);

      return () => {
        clearInterval(interval.current);
      };
    }, [moveToNext, slidingIntervalMs, setCurrentSlide]);

    const restartInterval = useCallback(() => {
      clearInterval(interval.current);
      interval.current = setInterval(moveToNext, slidingIntervalMs);
    }, [moveToNext, slidingIntervalMs]);

    const [onTouchStart, onTouchEnd] = useSwipe({
      swipeLeft: () => {
        restartInterval();
        moveToPrevious();
      },
      swipeRight: () => {
        restartInterval();
        moveToNext();
      },
    });

    const selectSlide = useMemo(() => {
      return (index: number) => {
        setCurrentSlide(index);

        clearInterval(interval.current);
        interval.current = setInterval(moveToNext, slidingIntervalMs);
      };
    }, [interval, slidingIntervalMs, setCurrentSlide, moveToNext]);

    const sliderStyle = useMemo(
      () => ({
        transform: `translateX(calc(-100% * ${currentSlide}))`,
        transition: `transform ${slideTransitionSpeedMs}ms ease-in-out`,
      }),
      [currentSlide, slideTransitionSpeedMs]
    );

    return (
      <div
        id={id}
        className={mixClasses(classes(), className)}
        onTouchStart={isSwipable ? onTouchStart : undefined}
        onTouchEnd={isSwipable ? onTouchEnd : undefined}
      >
        <div
          className={classes("slidesContainer")}
          data-testid={testId}
          style={sliderStyle}
        >
          {children}
        </div>
        {showBullets ? (
          <Bullets
            totalCount={slidesCount}
            onSelect={isClickableBullets ? selectSlide : undefined}
          />
        ) : undefined}
      </div>
    );
  });
