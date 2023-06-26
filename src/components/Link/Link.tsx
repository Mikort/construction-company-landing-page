import { BaseProps } from "src/BaseProps.interface";
import React, { memo, ReactNode, useMemo } from "react";
import { HashLink as RouterLink } from "react-router-hash-link";
import styleClasses from "./Link.module.css";
import block from "bem-css-modules";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface LinkProps extends BaseProps {
  /**
   * Внешний вид ссылки
   * @default true
   */
  withUnderline?: boolean;

  /**
   * Цвет ссылки
   */
  color: "secondary-1000" | "secondary-600" | "secondary-200";

  /**
   * Путь, куда ведет ссылка
   */
  href: string;

  /**
   * Контент ссылки
   */
  children: ReactNode;
}

/**
 * Ссылка. При нажатии переводит на путь, указанный в href
 */
export const Link: React.FunctionComponent<LinkProps> = memo<LinkProps>(
  function ({
    withUnderline = true,
    color,
    href,
    children,
    id,
    testId = "Link",
    className,
  }) {
    const generatedClasses = useMemo(
      () => classes({ withUnderline, color }),
      [withUnderline, color]
    );

    return (
      <RouterLink
        id={id}
        className={mixClasses(generatedClasses, className)}
        to={href}
        data-testid={testId}
        smooth
      >
        {children}
      </RouterLink>
    );
  }
);
