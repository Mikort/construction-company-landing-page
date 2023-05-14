import { createContext, memo, useContext, useMemo, useState } from "react";
import { BaseContextProviderProps } from "src/BaseContextProviderProps.interface";
import { getNewId } from "utils/getNewId";

export interface TabsContextProps {
  /**
   * id панели вкладок
   */
  id: string;

  /**
   * Текущая открытая вкладка
   */
  currentTab: string;

  /**
   * Метод переключения на вкладку с переданным id
   * @param tabId - id вкладки, на которую нужно переключить
   */
  setCurrentTab?: (tabId: string) => void;
}

/**
 * Состояние панели вкладок
 */
export const TabsContext = createContext<TabsContextProps>({
  id: "tabs-default",
  currentTab: "",
});

export interface TabsContextProviderProps extends BaseContextProviderProps {
  /**
   * Вкладка, отображаемая по умолчанию
   */
  startTab: string;
}

export const TabsContextProvider = memo<TabsContextProviderProps>(function ({
  children,
  startTab,
}) {
  const [currentTab, setCurrentTab] = useState(startTab);

  const id = useMemo(() => getNewId("tabs-"), []);

  return (
    <TabsContext.Provider
      value={{
        id,
        currentTab,
        setCurrentTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
});

export const useTabsContext = () => {
  return useContext(TabsContext);
};
