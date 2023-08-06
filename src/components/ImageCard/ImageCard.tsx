import React, { CSSProperties, memo, ReactNode, useMemo } from "react";
import styleClasses from "./ImageCard.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { useResize } from "hooks/useResize";
import { Image } from "components/Image/Image";
import { mixClasses } from "utils/mixClasses";

const classes = block(styleClasses);

export interface ImageCardProps extends BaseProps {
  /**
   * Содержимое карточки
   */
  children: ReactNode;

  /**
   * Картинка карточки
   */
  imageSrc: string;
}

/**
 * Карточка поверх картинки
 */
export const ImageCard: React.FunctionComponent<ImageCardProps> =
  memo<ImageCardProps>(function ({
    children,
    imageSrc,
    id,
    testId = "ImageCard",
    className,
  }) {
    const size = useResize();

    const style = useMemo(() => {
      return { backgroundImage: `url(${imageSrc})` } as CSSProperties;
    }, [imageSrc]);

    // TODO добавить скриншотный тест
    return size.width > 550 ? (
      <div
        id={id}
        className={mixClasses(classes(), className)}
        data-testid={testId}
        style={style}
      >
        <div className={classes("content")}>{children}</div>
      </div>
    ) : (
      <div
        id={id}
        className={mixClasses(classes(), className)}
        data-testid={testId}
      >
        <Image
          src={imageSrc}
          alt={"background image"}
          isBorderRadiusEnabled
          className={classes("image")}
        />
        <div className={classes("content")}>{children}</div>
      </div>
    );
  });
