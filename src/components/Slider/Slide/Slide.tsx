import React, { memo, ReactElement } from "react";
import styleClasses from "./Slide.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { addRootNodeClassName } from "utils/addRootNodeClassName";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface SlideProps extends BaseProps {
  /**
   * Контент слайда
   */
  children: ReactElement<{ className: string }>;
}

/**
 * Отдельный слайд слайдера
 */
export const Slide: React.FunctionComponent<SlideProps> = memo<SlideProps>(
  function ({ children, id, testId = "Slide", className }) {
    return (
      <div
        id={id}
        className={mixClasses(classes(), className)}
        data-testid={testId}
      >
        {addRootNodeClassName(children, classes("content"))}
      </div>
    );
  }
);
