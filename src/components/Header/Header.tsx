import React, {
  memo,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styleClasses from "./Header.module.css";
import block from "bem-css-modules";
import { BaseProps } from "src/BaseProps.interface";
import { mixClasses } from "utils/mixClasses";
import { useResize } from "hooks/useResize";

const classes = block(styleClasses);

/**
 * Возвращает стиль, который корректирует скролл, чтобы ссылаемый контент
 * не был перекрыт шапкой сайта, а расположился прямо под ней
 * @param height - высота шапки сайта
 */
const getScrollMarginStyle = (height: number) =>
  `* { scroll-margin-top: ${height}px; }`;

export interface HeaderProps extends BaseProps {
  /**
   * Контент шапки
   */
  children: ReactNode;
}

/**
 * Шапка сайта
 */
export const Header: React.FunctionComponent<HeaderProps> = memo<HeaderProps>(
  function ({ children, id, testId = "Header", className }) {
    const headerRef = useRef<HTMLElement>(null);
    const [height, setHeight] = useState(0);

    // TODO проверить работу с помощью скриншотного теста
    const size = useResize();

    useEffect(() => {
      setHeight((headerRef.current?.clientHeight ?? 100) + 20);
    }, [size, setHeight]);

    const scrollMarginStyle = useMemo(
      () => getScrollMarginStyle(height),
      [height]
    );

    return (
      <>
        <style>{scrollMarginStyle}</style>
        <header
          id={id}
          ref={headerRef}
          className={mixClasses(classes(), className)}
          data-testid={testId}
        >
          {children}
        </header>
      </>
    );
  }
);
