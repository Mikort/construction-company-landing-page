import { act, render, screen } from "@testing-library/react";
import { Tabs } from "./Tabs";
import { TabContent } from "./TabPanel/TabContent";
import { TabsList } from "./TabsList/TabsList";
import { TabButton } from "./TabsList/TabButton/TabButton";
import userEvent from "@testing-library/user-event";

describe("Tabs", () => {
  it("компонент появился в DOM дереве", async () => {
    render(
      <Tabs startTab="0">
        <TabContent tabId="0">
          <p>test content 1</p>
        </TabContent>
        <TabsList>
          <TabButton tabId="0">test tab 1</TabButton>
        </TabsList>
      </Tabs>
    );

    const tabsElement = await screen.findByTestId("Tabs");
    expect(tabsElement).toBeInTheDocument();

    const tabPanelElement = await screen.findByTestId("TabPanel");
    expect(tabPanelElement).toBeInTheDocument();

    const tabsListElement = await screen.findByTestId("TabsList");
    expect(tabsListElement).toBeInTheDocument();

    const tabElement = await screen.findByTestId("TabButton");
    expect(tabElement).toBeInTheDocument();
  });

  it("вкладки переключаются", async () => {
    render(
      <Tabs startTab="0">
        <TabContent tabId="0">
          <p data-testid="TabButton-1-content">test content 1</p>
        </TabContent>
        <TabContent tabId="1">
          <p data-testid="TabButton-2-content">test content 2</p>
        </TabContent>
        <TabsList>
          <TabButton tabId="0" testId="TabButton-1">
            test tab 1
          </TabButton>
          <TabButton tabId="1" testId="TabButton-2">
            test tab 2
          </TabButton>
        </TabsList>
      </Tabs>
    );

    const tab1 = await screen.findByTestId("TabButton-1");
    const tab1content = await screen.findByTestId("TabButton-1-content");
    const tab2 = await screen.findByTestId("TabButton-2");
    const tab2content = await screen.findByTestId("TabButton-2-content");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(tab2);
    });
    expect(tab2content).toBeVisible();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(tab1);
    });
    expect(tab1content).toBeVisible();
  });

  it("по умолчанию ставится вкадка, переданная в startTab", async () => {
    render(
      <Tabs startTab="1">
        <TabContent tabId="0">test content 1</TabContent>
        <TabContent tabId="1">
          <p data-testid="TabButton-2-content">test content 2</p>
        </TabContent>
        <TabsList>
          <TabButton tabId="0">test tab 1</TabButton>
          <TabButton tabId="1">test tab 2</TabButton>
        </TabsList>
      </Tabs>
    );

    const tab2content = await screen.findByTestId("TabButton-2-content");
    expect(tab2content).toBeVisible();
  });
});
