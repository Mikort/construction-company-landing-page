import React, { memo, useMemo } from "react";
import styleClasses from "./Logo.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";
import { ReactComponent as LogoSvg } from "icons/logo.svg";

const classes = block(styleClasses);

export interface LogoProps extends BaseProps {
  /**
   * Основной цвет логотипа
   */
  color?: "secondary-0" | "secondary-1000";
}

/**
 * Логотип компании
 */
export const Logo: React.FunctionComponent<LogoProps> = memo<LogoProps>(
  function ({ color = "secondary-1000", id, testId = "Logo", className }) {
    const generatedClasses = useMemo(() => classes({ color }), [color]);

    return (
      <LogoSvg
        id={id}
        className={mixClasses(generatedClasses, className)}
        data-testid={testId}
      />
    );
  }
);
