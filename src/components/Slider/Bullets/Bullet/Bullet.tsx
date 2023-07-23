import React, { memo } from "react";
import styleClasses from "./Bullet.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface BulletProps extends BaseProps {
  /**
   * Выбран ли данный bullet
   * @default false
   */
  isChecked?: boolean;

  /**
   * Действия при нажатии на bullet
   */
  onClick?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * Идентификатор слайда
 */
export const Bullet: React.FunctionComponent<BulletProps> = memo<BulletProps>(
  function ({ isChecked = false, onClick, id, testId = "Bullet", className }) {
    return (
      <input
        id={id}
        type="radio"
        className={mixClasses(classes(), className)}
        checked={isChecked}
        onChange={onClick}
        data-testid={testId}
      />
    );
  }
);
