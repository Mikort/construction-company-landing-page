import styleClasses from "./Card.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { memo, ReactElement, useMemo } from "react";
import { addRootNodeClassName } from "utils/addRootNodeClassName";

const classes = block(styleClasses);

export interface CardProps extends BaseProps {
  /**
   * Иконка карточки
   */
  icon: ReactElement<SVGElement>;

  /**
   * Заголовок карточки
   */
  header: string;

  /**
   * Контент карточки
   */
  description: string;
}

/**
 * Карточка с текстовой информацией
 */
export const Card = memo<CardProps>(function ({
  icon,
  header,
  description,
  testId,
}) {
  const iconModified = useMemo(
    () => addRootNodeClassName(icon, classes("icon")),
    [icon]
  );

  return (
    <div className={classes()} data-testid={testId}>
      {iconModified}
      <article className={classes("article")}>
        <h3 className={classes("header")}>{header}</h3>
        <p className={classes("description")}>{description}</p>
      </article>
    </div>
  );
});
