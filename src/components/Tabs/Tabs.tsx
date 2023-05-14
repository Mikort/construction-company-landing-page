import { BaseProps } from "src/BaseProps.interface";
import { memo, ReactNode } from "react";
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
export const Tabs = memo<TabsProps>(function ({
  children,
  startTab,
  testId = "Tabs",
}) {
  return (
    <TabsContextProvider startTab={startTab}>
      <div data-testid={testId} role={ariaRole}>
        {children}
      </div>
    </TabsContextProvider>
  );
});
