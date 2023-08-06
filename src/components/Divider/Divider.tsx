import React, { memo } from "react";
import styleClasses from "./Divider.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface DividerProps extends BaseProps {}

/**
 * Разделитель контента
 */
export const Divider: React.FunctionComponent<DividerProps> =
  memo<DividerProps>(function ({ id, testId = "Divider", className }) {
    return (
      <hr
        id={id}
        className={mixClasses(classes(), className)}
        data-testid={testId}
      />
    );
  });
