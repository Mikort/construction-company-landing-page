import styleClasses from "./Input.module.css";
import block from "bem-css-modules";
import React, { ChangeEventHandler, memo, useMemo } from "react";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";

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

  /**
   * Ширина поля для ввода
   * @default "fit-parent"
   */
  width?: "fit-parent" | "auto";
}

/**
 * Текстовое поле ввода
 */
export const Input: React.FunctionComponent<InputProps> = memo<InputProps>(
  function ({
    value,
    placeholder,
    onChange,
    required = false,
    inputMode = "text",
    type = "text",
    disabled = false,
    width = "fit-parent",
    id,
    testId = "Input",
    className,
  }) {
    const newPlaceholder = useMemo(
      () => (placeholder ?? "") + (required ? "*" : ""),
      [placeholder, required]
    );

    const generatedClasses = useMemo(() => classes({ width }), [width]);

    return (
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        className={mixClasses(generatedClasses, className)}
        onChange={onChange}
        value={value}
        placeholder={newPlaceholder}
        required={required}
        data-testid={testId}
        disabled={disabled}
      />
    );
  }
);
