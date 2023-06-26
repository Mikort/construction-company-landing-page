import React, { createElement, memo } from "react";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";
import { useTextStyleClasses } from "components/Text/useTextStyleClasses";

export interface TextProps extends BaseProps {
  /**
   * Содержимое
   */
  children: string;

  /**
   * Толщина текста
   * @default "400"
   */
  fontWeight?: "400" | "600" | "700" | "800";

  /**
   * Высота строки
   * @default "32px"
   */
  lineHeight?:
    | "16px"
    | "20px"
    | "24px"
    | "28px"
    | "30px"
    | "32px"
    | "50px"
    | "60px"
    | "75px"
    | "85px";

  /**
   * Размер шрифта
   * @default "16px"
   */
  fontSize?:
    | "12px"
    | "14px"
    | "16px"
    | "18px"
    | "20px"
    | "22px"
    | "24px"
    | "48px"
    | "50px"
    | "60px"
    | "70px";

  /**
   * Цвет текста
   * @default "secondary-1000"
   */
  color?:
    | "primary-300"
    | "primary-500"
    | "primary-700"
    | "secondary-0"
    | "secondary-200"
    | "secondary-500"
    | "secondary-600"
    | "secondary-800"
    | "secondary-1000"
    | "accent-200";

  /**
   * Семантический тип текста
   * @default "p"
   */
  type?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "abbr"
    | "span"
    | "label";
}

/**
 * Компонент, изменяющий внешний вид текста
 */
export const Text: React.FunctionComponent<TextProps> = memo<TextProps>(
  function ({
    children,
    fontWeight = "400",
    lineHeight = "32px",
    fontSize = "16px",
    color = "secondary-1000",
    type = "p",
    id,
    testId = "Text",
    className,
  }) {
    const generatedClasses = useTextStyleClasses({
      fontWeight,
      lineHeight,
      fontSize,
      color,
    });

    return createElement(type, {
      id,
      children: children,
      className: mixClasses(generatedClasses, className),
      "data-testid": testId,
    });
  }
);
