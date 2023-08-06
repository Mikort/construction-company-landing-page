import React, {
  memo,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from "react";
import styleClasses from "./DropdownMenu.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { IconButton } from "components/IconButton/IconButton";
import { ReactComponent as BurgerIcon } from "icons/three-lines.svg";
import { Popup } from "components/Popup/Popup";
import { stopPropagation } from "utils/stopPropagation";
import { ReactComponent as CrossIcon } from "icons/cross.svg";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface DropdownMenuProps extends BaseProps {
  /**
   * Элементы меню
   */
  children: ReactElement<BaseProps>;
}

/**
 * Выпадающий список навигации
 */
export const DropdownMenu: React.FunctionComponent<DropdownMenuProps> =
  memo<DropdownMenuProps>(function ({
    children,
    id,
    testId = "DropdownMenu",
    className,
  }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownMenuRef = useRef(null);

    const onOpen = useCallback(() => setIsOpen(true), [setIsOpen]);
    const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);

    return (
      <>
        <IconButton onClick={onOpen} testId={`${testId}.OpenButton`}>
          <BurgerIcon />
        </IconButton>

        <Popup
          isOpen={isOpen}
          onBackgroundClick={() => setIsOpen(false)}
          positionVertical="stretch"
          positionHorizontal="left"
          animationType="slide-from-top"
          transitionDurationMs={400}
          isWithBackground
          testId={`${testId}.Popup`}
        >
          <div
            id={id}
            ref={dropdownMenuRef}
            className={mixClasses(classes(), className)}
            onClick={stopPropagation}
            data-testid={testId}
          >
            <IconButton
              onClick={onClose}
              className={classes("closeButton")}
              testId={`${testId}.CloseButton`}
            >
              <CrossIcon />
            </IconButton>

            {children}
          </div>
        </Popup>
      </>
    );
  });
