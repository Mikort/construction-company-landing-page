import React, { memo, ReactNode, useMemo } from "react";
import styleClasses from "./TabContent.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { getTabsContentId } from "components/Tabs/utils/getTabsContentId";
import { getTabsButtonId } from "components/Tabs/utils/getTabsButtonId";
import { useTabsContext } from "components/Tabs/Tabs.context";
import { mixClasses } from "utils/mixClasses";

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
export const TabContent: React.FunctionComponent<TabContentProps> =
  memo<TabContentProps>(function ({
    children,
    tabId,
    id,
    testId = "TabContent",
    className,
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

    const generatedClasses = useMemo(() => classes({ hidden }), [hidden]);

    return (
      <div
        className={mixClasses(generatedClasses, className)}
        id={id != null ? id : tabContentId}
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
