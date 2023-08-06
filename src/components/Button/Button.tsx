import React, {
  FormEventHandler,
  memo,
  MouseEventHandler,
  useMemo,
} from "react";
import styleClasses from "./Button.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";
import { useTextStyleClasses } from "components/Text/useTextStyleClasses";

const classes = block(styleClasses);

export type ButtonProps = ButtonRawProps | InputProps;

interface ButtonRawProps extends BaseProps {
  /**
   * Цветовая схема кнопки
   */
  color: "primary" | "secondary";

  /**
   * Переключение прозрачности background
   * @default false
   */
  isTransparent?: boolean;

  /**
   * Размеры кнопки
   */
  size: "small" | "medium";

  /**
   * Контент кнопки
   */
  children: string;

  /**
   * Обработчик события нажатия на кнопку
   */
  onClick: MouseEventHandler<HTMLButtonElement>;

  /**
   * Отключение кнопки
   * @default false
   */
  disabled?: boolean;

  /**
   * Является ли кнопка submit input для формы
   * @default false
   */
  isSubmit?: false;
}

interface InputProps extends BaseProps {
  /**
   * Цветовая схема кнопки
   */
  color: "primary" | "secondary";

  /**
   * Переключение прозрачности background
   * @default false
   */
  isTransparent?: boolean;

  /**
   * Размеры кнопки
   */
  size: "small" | "medium";

  /**
   * Контент кнопки
   */
  children: string;

  /**
   * Обработчик события нажатия на кнопку
   */
  onClick: FormEventHandler<HTMLInputElement>;

  /**
   * Отключение кнопки
   * @default false
   */
  disabled?: boolean;

  /**
   * Является ли кнопка submit input для формы
   * @default false
   */
  isSubmit?: true;
}

/**
 * Кнопка с обработчиком нажатия на нее
 */
export const Button: React.FunctionComponent<ButtonProps> = memo<ButtonProps>(
  function ({
    children,
    color,
    isTransparent = false,
    size,
    onClick,
    disabled = false,
    isSubmit = false,
    id,
    testId = "Button",
    className,
  }) {
    const generatedClasses = useMemo(
      () => classes({ color, isTransparent: isTransparent, size }),
      [color, isTransparent, size]
    );

    const textClasses = useTextStyleClasses({
      color:
        isTransparent && color === "secondary"
          ? "secondary-1000"
          : "secondary-0",
      fontWeight: size === "medium" || color === "primary" ? "700" : "400",
      fontSize: size === "medium" ? "24px" : "16px",
      lineHeight: size === "medium" ? "30px" : "20px",
    });

    return isSubmit ? (
      <input
        id={id}
        className={mixClasses(generatedClasses, textClasses, className)}
        onSubmit={onClick as FormEventHandler<HTMLInputElement>}
        data-testid={testId}
        value={children}
      />
    ) : (
      <button
        id={id}
        className={mixClasses(generatedClasses, textClasses, className)}
        onClick={onClick as MouseEventHandler<HTMLButtonElement>}
        data-testid={testId}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);
