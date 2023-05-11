import styleClasses from "./Input.module.css";
import block from "bem-css-modules";
import { ChangeEventHandler, memo, useMemo } from "react";
import { BaseProps } from "src/BaseProps.interface";

const classes = block(styleClasses);

export interface InputProps extends BaseProps {
  /**
   * Текст, находящийся в поле ввода в данный момент
   * @default undefined
   */
  value?: string;

  /**
   * Сообщение, отображаемое при отсутствии текста в поле ввода
   * @default ''
   */
  placeholder?: string;

  /**
   * Обработчик события изменения текста в поле ввода
   * @default undefined
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /**
   * Отметка об обязательности ввода текста в данное поле (отображается символом "*" после текста "placeholder")
   * @default false
   */
  required?: boolean;

  /**
   * Тип клавиатуры для ввода
   * @default "text"
   */
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";

  /**
   * Тип отображения поля ввода
   * @default "text"
   */
  type?: "email" | "number" | "password" | "tel" | "text" | "url";

  /**
   * Отключение поля для ввода
   * @default false
   */
  disabled?: boolean;
}

/**
 * Текстовое поле ввода
 */
export const Input = memo<InputProps>(function ({
  value,
  placeholder,
  onChange,
  required = false,
  testId,
  inputMode = "text",
  type = "text",
  disabled = false,
}) {
  const newPlaceholder = useMemo(
    () => `${placeholder ?? ""}${required ? "*" : ""}`,
    [placeholder, required]
  );

  return (
    <input
      type={type}
      inputMode={inputMode}
      className={classes()}
      onChange={onChange}
      value={value}
      placeholder={newPlaceholder}
      required={required}
      data-testid={testId}
      disabled={disabled}
    />
  );
});
