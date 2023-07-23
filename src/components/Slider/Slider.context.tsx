import React, {
  createContext,
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { BaseContextProviderProps } from "src/BaseContextProviderProps.interface";

export interface SliderContextProps {
  /**
   * Текущий слайд
   * @default 0
   */
  currentSlide: number;

  /**
   * Метод переключения на конкретный слайд
   */
  setCurrentSlide: Dispatch<SetStateAction<number>>;

  /**
   * Количество слайдов
   */
  slidesCount: number;

  /**
   * Метод для переключения на следующий слайд
   */
  moveToNext: () => void;

  /**
   * Метод для переключения на предыдущий слайд
   */
  moveToPrevious: () => void;
}

export const SliderContext = createContext<SliderContextProps>({
  currentSlide: 0,
  slidesCount: 0,
  setCurrentSlide(value: ((prevState: number) => number) | number): void {},
  moveToNext(): void {},
  moveToPrevious(): void {},
});

export interface SliderContextProviderProps extends BaseContextProviderProps {
  /**
   * Слайд, с которого начниается отображение слайдера
   * @default 0
   */
  startSlide?: number;

  /**
   * Количество слайдов
   */
  slidesCount: number;
}

export const SliderContextProvider = memo<SliderContextProviderProps>(
  function ({ children, startSlide = 0, slidesCount }) {
    const [currentSlide, setCurrentSlide] = useState(startSlide);

    const moveToNext = useCallback(
      () =>
        setCurrentSlide((current) =>
          current + 1 >= slidesCount ? 0 : current + 1
        ),
      [setCurrentSlide, slidesCount]
    );

    const moveToPrevious = useCallback(
      () =>
        setCurrentSlide((current) =>
          current - 1 < 0 ? slidesCount - 1 : current - 1
        ),
      [setCurrentSlide, slidesCount]
    );

    // TODO useMemo для value
    return (
      <SliderContext.Provider
        value={{
          currentSlide,
          slidesCount,
          setCurrentSlide,
          moveToNext,
          moveToPrevious,
        }}
      >
        {children}
      </SliderContext.Provider>
    );
  }
);

export const useSliderContext = () => {
  return useContext(SliderContext);
};
