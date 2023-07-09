import React, { memo, ReactNode } from "react";
import styleClasses from "./Footer.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface FooterProps extends BaseProps {
  /**
   * Содержимое подвала
   */
  children: ReactNode;
}

/**
 * Подвал сайта
 */
export const Footer: React.FunctionComponent<FooterProps> = memo<FooterProps>(
  function ({ children, id, testId = "Footer", className }) {
    return (
      <footer
        id={id}
        className={mixClasses(classes(), className)}
        data-testid={testId}
      >
        {children}
      </footer>
    );
  }
);
