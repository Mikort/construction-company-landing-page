import styleClasses from "./TabButton.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import React, { memo, ReactNode, useCallback, useMemo } from "react";
import { getTabsButtonId } from "components/Tabs/utils/getTabsButtonId";
import { getTabsContentId } from "components/Tabs/utils/getTabsContentId";
import { useTabsContext } from "components/Tabs/Tabs.context";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

const ariaRole = "tab";

export interface TabButtonProps extends BaseProps {
  /**
   * Контент кнопки вкладки
   */
  children: ReactNode;

  /**
   * id панели контента, которую должна открывать вкадка
   */
  tabId: string;

  /**
   * Отключена ли данная вкладка
   * @default false
   */
  isDisabled?: boolean;
}

/**
 * Кнопка, переключающая на вкладку c переданным id
 */
export const TabButton: React.FunctionComponent<TabButtonProps> =
  memo<TabButtonProps>(function ({
    children,
    tabId,
    isDisabled = false,
    id,
    testId = "TabButton",
    className,
  }) {
    const { setCurrentTab, currentTab, id: tabsId } = useTabsContext();

    const onClick = useCallback(() => {
      setCurrentTab?.(tabId);
    }, [setCurrentTab, tabId]);

    const isChosen = useMemo(() => currentTab === tabId, [currentTab, tabId]);
    const tabContentId = useMemo(
      () => getTabsContentId(tabsId, tabId),
      [tabsId, tabId]
    );
    const tabButtonId = useMemo(
      () => getTabsButtonId(tabsId, tabId),
      [tabsId, tabId]
    );

    const generatedClasses = useMemo(() => classes({ isChosen }), [isChosen]);

    return (
      <button
        className={mixClasses(generatedClasses, className)}
        onClick={onClick}
        disabled={isDisabled}
        id={id != null ? id : tabButtonId}
        data-testid={testId}
        role={ariaRole}
        aria-selected={isChosen}
        aria-controls={tabContentId}
      >
        {children}
      </button>
    );
  });
