import React, { memo, useMemo } from "react";
import styleClasses from "./Image.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface ImageProps extends BaseProps {
  /**
   * Ссылка на изображение
   */
  src: string;

  /**
   * Альтернативное название картинки
   */
  alt: string;

  /**
   * Скругление у изображений
   * @default false
   */
  isBorderRadiusEnabled?: boolean;
}

/**
 * Картинка - всегда заполняет предоставленное пространство
 */
export const Image: React.FunctionComponent<ImageProps> = memo<ImageProps>(
  function ({
    src,
    alt,
    isBorderRadiusEnabled = false,
    id,
    testId = "Image",
    className,
  }) {
    const generatedClasses = useMemo(
      () => classes({ isBorderRadiusEnabled }),
      [isBorderRadiusEnabled]
    );

    return (
      <img
        id={id}
        src={src}
        alt={alt}
        data-testid={testId}
        className={mixClasses(generatedClasses, className)}
      />
    );
  }
);
