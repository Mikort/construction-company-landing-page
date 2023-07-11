import { BaseProps } from "src/BaseProps.interface";
import React, { memo, ReactNode } from "react";
import { TabsContextProvider } from "./Tabs.context";

const ariaRole = "tabs";

export interface TabsProps extends BaseProps {
  /**
   * Вкладки и их контент
   */
  children: ReactNode;

  /**
   * Вкладка, отображаемая по умолчанию
   */
  startTab: string;
}

/**
 * Контейнер для вкладок
 */
export const Tabs: React.FunctionComponent<TabsProps> = memo<TabsProps>(
  function ({ children, startTab, id, testId = "Tabs", className }) {
    return (
      <TabsContextProvider startTab={startTab}>
        <div id={id} data-testid={testId} className={className} role={ariaRole}>
          {children}
        </div>
      </TabsContextProvider>
    );
  }
);
