import { Tabs } from "./Tabs";
import { TabsList } from "./TabsList/TabsList";
import { TabButton } from "./TabsList/TabButton/TabButton";
import { TabContent } from "./TabsPanel/TabContent/TabContent";
import { TabsPanel } from "components/Tabs/TabsPanel/TabsPanel";

export default {
  title: "Tabs",
  component: Tabs,
};

export const Default = {
  args: {
    children: (
      <>
        <TabsList ariaLabel="TabList demo">
          <TabButton tabId="0">1 Шаг</TabButton>
          <TabButton tabId="1">2 Шаг</TabButton>
          <TabButton tabId="2">3 Шаг</TabButton>
          <TabButton tabId="3">4 Шаг</TabButton>
        </TabsList>
        <TabsPanel>
          <TabContent tabId="0">Контент вкладки 1</TabContent>
          <TabContent tabId="1">Контент вкладки 2</TabContent>
          <TabContent tabId="2">Контент вкладки 3</TabContent>
          <TabContent tabId="3">Контент вкладки 4</TabContent>
        </TabsPanel>
      </>
    ),
    startTab: "0",
  },
};
