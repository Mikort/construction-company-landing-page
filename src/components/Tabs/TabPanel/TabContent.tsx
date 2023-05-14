import { memo, ReactNode, useMemo } from "react";
import styleClasses from "./TabContent.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { getTabsContentId } from "components/Tabs/utils/getTabsContentId";
import { getTabsButtonId } from "components/Tabs/utils/getTabsButtonId";
import { useTabsContext } from "components/Tabs/Tabs.context";

const classes = block(styleClasses);

const ariaRole = "tabpanel";
const ariaTabindex = 0;

export interface TabContentProps extends BaseProps {
  /**
   * Контент
   */
  children: ReactNode;

  /**
   * id вкладки
   */
  tabId: string;
}

/**
 * Компонент, содержащий контент вкладки
 */
export const TabContent = memo<TabContentProps>(function ({
  children,
  tabId,
  testId = "TabContent",
}) {
  const { currentTab, id: tabsId } = useTabsContext();

  const hidden = useMemo(() => currentTab !== tabId, [tabId, currentTab]);
  const tabButtonId = useMemo(
    () => getTabsButtonId(tabsId, tabId),
    [tabsId, tabId]
  );
  const tabContentId = useMemo(
    () => getTabsContentId(tabsId, tabId),
    [tabsId, tabId]
  );

  return (
    <div
      className={classes({ hidden })}
      id={tabContentId}
      data-testid={testId}
      role={ariaRole}
      tabIndex={ariaTabindex}
      hidden={hidden}
      aria-labelledby={tabButtonId}
    >
      {children}
    </div>
  );
});
