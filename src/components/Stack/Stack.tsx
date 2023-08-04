import React, { memo, ReactNode, useMemo } from "react";
import styleClasses from "./Stack.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { stopPropagation } from "utils/stopPropagation";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface StackProps extends BaseProps {
  /**
   * Контент
   */
  children: ReactNode;

  /**
   * Направление списка
   * @default "row"
   */
  direction?: "row" | "column" | "row-reverse" | "column-reverse";

  /**
   * Расстояние между элементами
   * @default "32px"
   */
  gap?:
    | "0px"
    | "8px"
    | "16px"
    | "20px"
    | "26px"
    | "32px"
    | "50px"
    | "60px"
    | "85px"
    | "90px"
    | "100px";

  /**
   * Расположение элементов
   * @default "start"
   */
  justifyContent?:
    | "start"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly";

  /**
   * Расположение элементов
   * @default "start"
   */
  alignItems?: "start" | "end" | "center" | "stretch";

  /**
   * Ширина компонента
   * @default "auto"
   */
  width?: "fit-content" | "fit-parent" | "auto";

  /**
   * Высота компонента
   * @default "auto"
   */
  height?: "fit-content" | "fit-parent" | "auto";

  /**
   * @default false
   */
  isShrinking?: boolean;

  /**
   * @default false
   */
  isSameSizedItems?: boolean;

  /**
   * Достпно ли прокручивание контента
   * @default true
   */
  scrollable?: boolean;
}

/**
 * Распологает элементы один за другим
 */
export const Stack: React.FunctionComponent<StackProps> = memo<StackProps>(
  function ({
    children,
    direction = "row",
    gap = "32px",
    justifyContent = "start",
    width = "auto",
    height = "auto",
    alignItems = "start",
    isShrinking = false,
    isSameSizedItems = false,
    scrollable = true,
    id,
    testId = "Stack",
    className,
  }) {
    const generatedClasses = useMemo(
      () =>
        classes({
          direction,
          gap,
          justifyContent,
          alignItems,
          width,
          height,
          isShrinking,
          isSameSizedItems,
          scrollable,
        }),
      [
        direction,
        gap,
        justifyContent,
        alignItems,
        width,
        height,
        isShrinking,
        isSameSizedItems,
        scrollable,
      ]
    );

    return (
      <div
        id={id}
        className={mixClasses(generatedClasses, className)}
        data-testid={testId}
        onClick={stopPropagation}
      >
        {children}
      </div>
    );
  }
);
