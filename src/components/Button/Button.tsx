import { memo, MouseEventHandler, ReactNode } from "react";
import styleClasses from "./Button.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";

const classes = block(styleClasses);

export interface ButtonProps extends BaseProps {
  /**
   * Цветовая схема кнопки
   */
  color: "primary" | "secondary";

  /**
   * Переключение прозрачности background
   * @default false
   */
  transparent?: boolean;

  /**
   * Размеры кнопки
   */
  size: "small" | "medium";

  /**
   * Контент кнопки
   */
  children: ReactNode;

  /**
   * Обработчик события нажатия на кнопку
   */
  onClick: MouseEventHandler<HTMLButtonElement>;

  /**
   * Отключение кнопки
   * @default false
   */
  disabled?: boolean;
}

/**
 * Кнопка с обработчиком нажатия на нее
 */
export const Button = memo<ButtonProps>(function ({
  children,
  color,
  transparent = false,
  size,
  onClick,
  testId,
  disabled = false,
}) {
  return (
    <button
      className={classes({ color, transparent, size })}
      onClick={onClick}
      data-testid={testId}
      disabled={disabled}
    >
      {children}
    </button>
  );
});
