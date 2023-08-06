import { NavigationMenu } from "./NavigationMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { config as cssTransitionConfig } from "react-transition-group";

describe("NavigationMenu", () => {
  it("компонент появился в DOM дереве", async () => {
    render(<NavigationMenu type="horizontal">Test</NavigationMenu>);

    const element = await screen.findByTestId("NavigationMenu");
    expect(element).toBeInTheDocument();
  });

  describe("DropdownMenu", () => {
    beforeAll(() => {
      cssTransitionConfig.disabled = true;
    });

    afterAll(() => {
      cssTransitionConfig.disabled = false;
    });

    it("выпадающее меню появляется при нажатии на кнопку открытия меню", async () => {
      render(<NavigationMenu type="dropdown">Test</NavigationMenu>);

      const openButton = await screen.findByTestId(
        "NavigationMenu.DropdownMenu.OpenButton"
      );
      expect(openButton).toBeInTheDocument();

      fireEvent.click(openButton);

      const dropdownMenu = await screen.findByTestId(
        "NavigationMenu.DropdownMenu"
      );
      expect(dropdownMenu).toBeInTheDocument();
    });

    it("выпадающее меню исчезает при нажатии на кнопку закрытия меню", async () => {
      render(<NavigationMenu type="dropdown">Test</NavigationMenu>);

      const openButton = await screen.findByTestId(
        "NavigationMenu.DropdownMenu.OpenButton"
      );
      expect(openButton).toBeInTheDocument();

      fireEvent.click(openButton);

      const dropdownMenu = await screen.findByTestId(
        "NavigationMenu.DropdownMenu"
      );
      expect(dropdownMenu).toBeInTheDocument();

      const closeButton = await screen.findByTestId(
        "NavigationMenu.DropdownMenu.CloseButton"
      );
      expect(closeButton).toBeInTheDocument();

      fireEvent.click(closeButton);

      expect(dropdownMenu).not.toBeInTheDocument();
    });
  });
});
