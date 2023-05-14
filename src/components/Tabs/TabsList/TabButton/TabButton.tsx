import styleClasses from "./TabButton.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { memo, ReactNode, useCallback, useMemo } from "react";
import { getTabsButtonId } from "components/Tabs/utils/getTabsButtonId";
import { getTabsContentId } from "components/Tabs/utils/getTabsContentId";
import { useTabsContext } from "components/Tabs/Tabs.context";

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
export const TabButton = memo<TabButtonProps>(function ({
  children,
  tabId,
  isDisabled = false,
  testId = "TabButton",
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

  return (
    <button
      className={classes({ isChosen })}
      onClick={onClick}
      disabled={isDisabled}
      id={tabButtonId}
      data-testid={testId}
      role={ariaRole}
      aria-selected={isChosen}
      aria-controls={tabContentId}
    >
      {children}
    </button>
  );
});
