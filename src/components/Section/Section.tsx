import React, { memo, ReactNode } from "react";
import styleClasses from "./Section.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { Text } from "components/Text/Text";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface SectionProps extends BaseProps {
  /**
   * Контент раздела
   */
  children: ReactNode;

  /**
   * Заголовок раздела
   */
  header: string;

  /**
   * Описание раздела
   */
  description?: string;
}

/**
 * Раздел документа
 */
export const Section: React.FunctionComponent<SectionProps> =
  memo<SectionProps>(function ({
    children,
    header,
    description,
    id,
    testId = "Section",
    className,
  }) {
    return (
      <section
        id={id}
        className={mixClasses(classes(), className)}
        data-testid={testId}
      >
        <Text
          className={classes("header")}
          type="h2"
          fontWeight="400"
          fontSize="48px"
          lineHeight="60px"
        >
          {header}
        </Text>

        {description != null ? (
          <Text className={classes("description")} fontWeight="400">
            {description}
          </Text>
        ) : null}

        {children}
      </section>
    );
  });
