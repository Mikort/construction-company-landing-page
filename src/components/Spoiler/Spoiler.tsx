import { memo, ReactNode, useCallback, useState } from "react";
import styleClasses from "./Spoiler.module.css";
import block from "bem-css-modules";
import { CrossIcon, CrossIconColor } from "./CrossIcon/CrossIcon";
import { BaseProps } from "src/BaseProps.interface";

const classes = block(styleClasses);

export interface SpoilerProps extends BaseProps {
  /**
   * Контент для отображения под спойлером
   */
  children: ReactNode;

  /**
   * Заголовок
   */
  label: string;

  /**
   * Состояние компонента на старте (раскрыто/скрыто)
   * @default false
   */
  isOpen?: boolean;
}

/**
 * Компонент для отображения/сокрытия контента по клику на заголовок
 */
export const Spoiler = memo<SpoilerProps>(function ({
  label,
  children,
  isOpen = false,
  testId = "Spoiler",
}) {
  const [color, setColor] = useState<CrossIconColor>("secondary");

  const onMouseEnter = useCallback(() => setColor("primary"), [setColor]);
  const onMouseLeave = useCallback(() => setColor("secondary"), [setColor]);

  return (
    <details className={classes()} open={isOpen} data-testid={testId}>
      <summary
        className={classes("summary")}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data-testid={`${testId}.summary`}
      >
        <p className={classes("label")} data-testid={`${testId}.label`}>
          {label}
        </p>
        <CrossIcon color={color} data-testid={`${testId}.icon`} />
      </summary>
      <div className={classes("content")} data-testid={`${testId}.content`}>
        {children}
      </div>
    </details>
  );
});
