import styleClasses from "./Card.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import React, { memo, ReactElement, useMemo } from "react";
import { addRootNodeClassName } from "utils/addRootNodeClassName";
import { mixClasses } from "utils/mixClasses";

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
export const Card: React.FunctionComponent<CardProps> = memo<CardProps>(
  function ({ icon, header, description, id, testId = "Card", className }) {
    const iconModified = useMemo(
      () => addRootNodeClassName(icon, classes("icon")),
      [icon]
    );

    return (
      <div
        id={id}
        className={mixClasses(classes(), className)}
        data-testid={testId}
      >
        {iconModified}
        <article className={classes("article")}>
          <h3 className={classes("header")}>{header}</h3>
          <p className={classes("description")}>{description}</p>
        </article>
      </div>
    );
  }
);
