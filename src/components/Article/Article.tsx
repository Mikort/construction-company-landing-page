import React, { memo, ReactNode, useMemo } from "react";
import styleClasses from "./Article.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface ArticleProps extends BaseProps {
  /**
   * Содержимое статьи
   */
  children: ReactNode;

  /**
   * Промежуток между элементами
   * @default "8px"
   */
  gap?: "6px" | "8px" | "16px" | "24px" | "32px";

  /**
   * Максимальная ширина элемента
   * @default "unset"
   */
  maxWidth?: "unset" | "360px" | "460px" | "760px" | "860px";

  /**
   * Выравнивание текста
   * @default "start"
   */
  textAlign?: "start" | "center" | "end";
}

/**
 * Самостоятельная часть документа
 */
export const Article: React.FunctionComponent<ArticleProps> =
  memo<ArticleProps>(function ({
    children,
    gap = "8px",
    maxWidth = "unset",
    textAlign = "start",
    id,
    testId = "Article",
    className,
  }) {
    const generatedClasses = useMemo(
      () => classes({ gap, maxWidth, textAlign }),
      [gap, maxWidth, textAlign]
    );
    return (
      <article
        id={id}
        className={mixClasses(generatedClasses, className)}
        data-testid={testId}
      >
        {children}
      </article>
    );
  });
