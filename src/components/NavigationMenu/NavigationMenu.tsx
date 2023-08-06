import React, { memo, ReactNode, useMemo } from "react";
import { BaseProps } from "src/BaseProps.interface";
import { Stack } from "components/Stack/Stack";
import { useResize } from "hooks/useResize";
import { DropdownMenu } from "components/NavigationMenu/DropdownMenu/DropdownMenu";

export interface NavigationMenuProps extends BaseProps {
  /**
   * Элементы меню
   */
  children: ReactNode;

  /**
   * Варианты отоборажения меню
   */
  type: "dropdown" | "horizontal" | "vertical";
}

/**
 * Меню навигации по сайту
 */
export const NavigationMenu: React.FunctionComponent<NavigationMenuProps> =
  memo<NavigationMenuProps>(function ({
    children,
    type,
    id,
    testId = "NavigationMenu",
    className,
  }) {
    const size = useResize();

    const itemsStack = useMemo(() => {
      let gap: "32px" | "60px" | "85px";
      if (size.width > 1500) {
        gap = "85px";
      } else if (size.width > 550) {
        gap = "60px";
      } else {
        gap = "32px";
      }

      return (
        <Stack
          direction={type === "horizontal" ? "row" : "column"}
          justifyContent={type === "horizontal" ? "end" : "start"}
          gap={gap}
          width={type === "dropdown" ? "fit-parent" : "auto"}
          testId={`${testId}.ItemsContainer`}
        >
          {children}
        </Stack>
      );
    }, [size.width, type, testId, children]);

    return (
      <nav id={id} className={className} data-testid={testId}>
        {type === "dropdown" ? (
          <DropdownMenu testId={`${testId}.DropdownMenu`}>
            {itemsStack}
          </DropdownMenu>
        ) : (
          itemsStack
        )}
      </nav>
    );
  });
