import React, {
  memo,
  MouseEventHandler,
  ReactNode,
  useMemo,
  useRef,
} from "react";
import styleClasses from "./Popup.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import { usePreventPageScroll } from "hooks/usePreventPageScroll";

const classes = block(styleClasses);

const modalRoot =
  (document.getElementById("modal-root") as HTMLElement) ?? document.body;
const cssTransitionClasses = {
  enter: classes({ transition: "enter" }),
  enterActive: classes({ transition: "enter-active" }),
  exit: classes({ transition: "exit" }),
  exitActive: classes({ transition: "exit-active" }),
  exitDone: classes(),
  enterDone: classes({ transition: "enter-done" }),
};

export interface PopupProps extends BaseProps {
  /**
   * Контент всплывающего окна
   */
  children: ReactNode;

  /**
   * Положение popup по вертикали
   * @default "top"
   */
  positionVertical?: "top" | "center" | "bottom" | "stretch";

  /**
   * Положение popup по горизонтали
   * @default "center"
   */
  positionHorizontal?: "left" | "center" | "right" | "stretch";

  /**
   * Вид анимации появления/исчезновения
   * @default "change-opacity"
   */
  animationType?: "slide-from-bottom" | "slide-from-top" | "change-opacity";

  /**
   * Включение затемнения экрана
   * @default false
   */
  isWithBackground?: boolean;

  /**
   * Действие при нажатии вне модалки
   */
  onBackgroundClick?: MouseEventHandler<HTMLDivElement>;

  /**
   * Открыто ли всплывающее окно
   * @default false
   */
  isOpen?: boolean;

  /**
   * Скорость анимации появления/исчезновения
   * @default 500ms
   */
  transitionDurationMs?: number;
}

/**
 * Всплывающее окно
 */
export const Popup: React.FunctionComponent<PopupProps> = memo<PopupProps>(
  function ({
    children,
    positionVertical = "top",
    positionHorizontal = "center",
    animationType = "change-opacity",
    isWithBackground = false,
    onBackgroundClick,
    isOpen = false,
    transitionDurationMs = 500,
    id,
    testId = "Popup",
    className,
  }) {
    const positionClassNames = useMemo(() => {
      return classes("content", {
        positionVertical,
        positionHorizontal,
      });
    }, [positionVertical, positionHorizontal]);

    const contentTransition = useMemo(() => {
      return animationType === "change-opacity"
        ? `opacity ${transitionDurationMs}ms ease-in-out`
        : `transform ${transitionDurationMs}ms cubic-bezier(0, 0, 0.14, 1.00)`;
    }, [transitionDurationMs, animationType]);

    const backgroundTransition = useMemo(() => {
      return isWithBackground
        ? `background-color ${transitionDurationMs}ms linear`
        : undefined;
    }, [isWithBackground, transitionDurationMs]);

    const popupRef = useRef(null);

    const setScrollDisabled = usePreventPageScroll(false);

    const generatedClasses = useMemo(
      () => classes({ animationType, isWithBackground }),
      [animationType, isWithBackground]
    );

    return ReactDOM.createPortal(
      <CSSTransition
        in={isOpen}
        nodeRef={popupRef}
        classNames={cssTransitionClasses}
        timeout={transitionDurationMs}
        onExited={() => setScrollDisabled(false)}
        onEnter={() => setScrollDisabled(true)}
        unmountOnExit
        mountOnEnter
      >
        <div
          id={id}
          ref={popupRef}
          className={generatedClasses}
          style={{
            transition: backgroundTransition,
          }}
          data-testid={testId}
          onClick={onBackgroundClick}
        >
          <div
            className={mixClasses(positionClassNames, className)}
            style={{
              transition: contentTransition,
            }}
          >
            {children}
          </div>
        </div>
      </CSSTransition>,
      modalRoot
    );
  }
);
