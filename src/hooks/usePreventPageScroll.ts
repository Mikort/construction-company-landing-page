import { useEffect, useState } from "react";

/**
 * Убирает scrollbar со страницы, добавляя paddingRight, равный ширине scrollbar страницы
 * @param isEnabledByDefault включен ли scrollbar по умолчанию
 */
export function usePreventPageScroll(
  isEnabledByDefault: boolean
): (enabled: boolean) => void {
  const [isScrollDisabled, setScrollDisabled] = useState(isEnabledByDefault);

  useEffect(() => {
    const htmlElement = document.documentElement;

    const windowWidth = window.innerWidth;
    const htmlWidth = htmlElement.clientWidth;
    const scrollbarWidth = windowWidth - htmlWidth;

    const windowHeight = window.innerHeight;
    const htmlHeight = htmlElement.clientHeight;
    const scrollbarHeight = windowHeight - htmlHeight;

    const previousPaddingRight = htmlElement.style.paddingRight;
    const previousPaddingBottom = htmlElement.style.paddingBottom;

    if (isScrollDisabled) {
      if (previousPaddingRight === "auto" || previousPaddingRight === "") {
        htmlElement.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        htmlElement.style.paddingRight = `calc(${previousPaddingRight} + ${scrollbarWidth}px)`;
      }

      if (previousPaddingBottom === "auto" || previousPaddingBottom === "") {
        htmlElement.style.paddingBottom = `${scrollbarHeight}px`;
      } else {
        htmlElement.style.paddingBottom = `calc(${previousPaddingBottom} + ${scrollbarHeight}px)`;
      }
    }

    const previousOverflow = htmlElement.style.overflow;
    htmlElement.style.overflow = isScrollDisabled ? "hidden" : previousOverflow;

    return () => {
      htmlElement.style.overflow = previousOverflow;
      htmlElement.style.paddingRight = previousPaddingRight ?? "unset";
      htmlElement.style.paddingBottom = previousPaddingBottom ?? "unset";
    };
  }, [isScrollDisabled]);

  return setScrollDisabled;
}
