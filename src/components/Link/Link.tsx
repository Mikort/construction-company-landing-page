import { BaseProps } from "../../BaseProps.interface";
import { memo, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import styleClasses from "./Link.module.css";
import block from "bem-css-modules";

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
export const Link = memo<LinkProps>(function ({
  withUnderline = true,
  color,
  href,
  children,
  testId,
}) {
  return (
    <RouterLink
      className={classes({ withUnderline, color })}
      to={href}
      data-testid={testId}
    >
      {children}
    </RouterLink>
  );
});
