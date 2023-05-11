import { BaseProps } from "src/BaseProps.interface";
import { memo, MouseEventHandler, ReactNode } from "react";
import styleClasses from "./IconButton.module.css";
import block from "bem-css-modules";

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
 * Кнопка наавигационного меню
 */
export const IconButton = memo<IconButtonProps>(function ({
  children,
  onClick,
  disabled = false,
  testId,
}) {
  return (
    <button
      disabled={disabled}
      className={classes()}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  );
});
