import styleClasses from "./TabsList.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import React, { memo, ReactNode } from "react";
import { mixClasses } from "utils/mixClasses";

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
export const TabsList: React.FunctionComponent<TabsListProps> =
  memo<TabsListProps>(function ({
    children,
    ariaLabel,
    id,
    testId = "TabsList",
    className,
  }) {
    return (
      <div
        id={id}
        className={mixClasses(classes(), className)}
        role={ariaRole}
        aria-label={ariaLabel}
        data-testid={testId}
      >
        {children}
      </div>
    );
  });
