import styleClasses from "./TabsList.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { memo, ReactNode } from "react";

const classes = block(styleClasses);

const ariaRole = "tablist";

export interface TabsListProps extends BaseProps {
  /**
   * Вкладки
   */
  children: ReactNode;

  /**
   * Описание вкладок
   */
  ariaLabel?: string;
}

/**
 * Список вкладок
 */
export const TabsList = memo<TabsListProps>(function ({
  children,
  ariaLabel,
  testId = "TabsList",
}) {
  return (
    <div
      className={classes()}
      role={ariaRole}
      aria-label={ariaLabel}
      data-testid={testId}
    >
      {children}
    </div>
  );
});
