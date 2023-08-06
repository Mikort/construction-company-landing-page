import { BaseProps } from "src/BaseProps.interface";
import React, { memo, MouseEventHandler, ReactNode } from "react";
import styleClasses from "./IconButton.module.css";
import block from "bem-css-modules";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface IconButtonProps extends BaseProps {
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
 * Кнопка навигационного меню
 */
export const IconButton: React.FunctionComponent<IconButtonProps> =
  memo<IconButtonProps>(function ({
    children,
    onClick,
    disabled = false,
    id,
    testId = "IconButton",
    className,
  }) {
    return (
      <button
        id={id}
        disabled={disabled}
        className={mixClasses(classes(), className)}
        onClick={onClick}
        data-testid={testId}
      >
        {children}
      </button>
    );
  });
