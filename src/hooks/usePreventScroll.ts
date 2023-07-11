import { useEffect, useState } from "react";

/**
 * Убирает scrollbar с элемента, добавляя paddingRight равный ширине scrollbar элемента
 * @param node элемент, с которого убрать scrollbar
 * @param isEnabledByDefault включен ли scrollbar по умолчанию
 */
export function usePreventScroll(
  node: HTMLElement,
  isEnabledByDefault: boolean
): (enabled: boolean) => void {
  const [isScrollDisabled, setScrollDisabled] = useState(isEnabledByDefault);

  useEffect(() => {
    const previousPaddingRight = node.style.paddingRight;
    const previousOverflow = node.style.overflow;

    node.style.overflow = isScrollDisabled ? "hidden" : previousOverflow;

    const scrollbarWidth = node.offsetWidth - node.clientWidth;
    node.style.paddingRight = `calc(${previousPaddingRight} + ${scrollbarWidth}px)`;

    return () => {
      node.style.overflow = previousOverflow;
      node.style.paddingRight = previousPaddingRight;
    };
  }, [node, isScrollDisabled]);

  return setScrollDisabled;
}
