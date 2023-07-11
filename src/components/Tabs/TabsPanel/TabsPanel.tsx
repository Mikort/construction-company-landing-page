import React, { memo, ReactNode } from "react";
import styleClasses from "./TabsPanel.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface TabsPanelProps extends BaseProps {
  /**
   * Список контента панели
   */
  children: ReactNode;
}

/**
 * Панель, где оторажается контент
 */
export const TabsPanel: React.FunctionComponent<TabsPanelProps> =
  memo<TabsPanelProps>(function ({
    children,
    id,
    testId = "TabsPanel",
    className,
  }) {
    return (
      <div
        id={id}
        className={mixClasses(classes(), className)}
        data-testid={testId}
      >
        {children}
      </div>
    );
  });
