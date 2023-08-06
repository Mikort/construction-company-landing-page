import React, { memo } from "react";
import styleClasses from "./CrossIcon.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";

const classes = block(styleClasses);

export type CrossIconColor = "secondary" | "primary";

export interface CrossIconProps extends BaseProps {
  /**
   * Цветовая схема иконки
   */
  color: CrossIconColor;
}

/**
 * Иконка маркера для компонента "Spoiler"
 */
export const CrossIcon: React.FunctionComponent<CrossIconProps> =
  memo<CrossIconProps>(function ({
    color,
    id,
    testId = "CroosIcon",
    className,
  }) {
    return (
      <svg
        id={id}
        className={className}
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-testid={testId}
      >
        <ellipse
          cx="25"
          cy="25"
          rx="25"
          ry="25"
          fill="currentcolor"
          className={classes("background", { color })}
        />
        <path
          className={classes("cross", { color })}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z"
          fill="currentcolor"
        />
      </svg>
    );
  });
