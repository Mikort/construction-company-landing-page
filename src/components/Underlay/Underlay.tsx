import React, { memo, ReactNode, useMemo } from "react";
import styleClasses from "./Underlay.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface UnderlayProps extends BaseProps {
  /**
   * Контент
   */
  children: ReactNode;

  /**
   * Компонент, отображаемый на заднем фоне, который будет расстянут
   * @note к компоненту добавится стиль через селектор
   */
  background: ReactNode;

  /**
   * Ширина компонента
   * @default "fit-parent"
   */
  width?: "wrap-content" | "fit-parent";

  /**
   * Высота копонента
   * @default "wrap-content"
   */
  height?: "wrap-content" | "fit-parent";
}

/**
 * Компонент, отображающий контент поверх какого-либо фона
 */
export const Underlay: React.FunctionComponent<UnderlayProps> =
  memo<UnderlayProps>(function ({
    children,
    background,
    width = "fit-parent",
    height = "wrap-content",
    id,
    testId = "Underlay",
    className,
  }) {
    const generatedClasses = useMemo(
      () =>
        classes({
          width,
          height,
        }),
      [width, height]
    );

    return (
      <div
        id={id}
        className={mixClasses(generatedClasses, className)}
        data-testid={testId}
      >
        {background}
        <div className={classes("container")}>{children}</div>
      </div>
    );
  });
