import React, { memo, useCallback, useMemo } from "react";
import styleClasses from "./Bullets.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";
import { Bullet } from "components/Slider/Bullets/Bullet/Bullet";
import { useSliderContext } from "components/Slider/Slider.context";

const classes = block(styleClasses);

export interface BulletsProps extends BaseProps {
  /**
   * Общее количество слайдов
   */
  totalCount: number;

  /**
   * Действие при нажатии на одну из кнопок слайда
   * @note undefined - неактивные кнопки
   */
  onSelect?: (selected: number) => void;
}

/**
 * Список кнопок, подсвечивающих текущий слайд
 */
export const Bullets: React.FunctionComponent<BulletsProps> =
  memo<BulletsProps>(function ({
    totalCount,
    onSelect,
    id,
    testId = "Bullets",
    className,
  }) {
    const { currentSlide } = useSliderContext();

    const onClick = useCallback(
      (index: number) => {
        onSelect?.(index);
      },
      [onSelect]
    );

    const bullets = useMemo(
      () =>
        Array.from({ length: totalCount }, (element, index) => {
          const onSelectIndex = () => onClick(index);

          return (
            <Bullet
              onClick={onSelectIndex}
              isChecked={currentSlide === index}
              key={index}
            />
          );
        }),
      [totalCount, onClick, currentSlide]
    );

    return (
      <div
        id={id}
        className={mixClasses(classes(), className)}
        data-testid={testId}
      >
        {bullets}
      </div>
    );
  });
