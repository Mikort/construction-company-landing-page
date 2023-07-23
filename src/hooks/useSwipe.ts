import { TouchEvent, TouchEventHandler, useCallback, useState } from "react";

export type SwipeHandler = () => void;

/**
 * Возвращает обработчик события начала touch и обработчик события окончания touch
 * @param actions набор обработчиков событий swipe
 */
export function useSwipe(actions: {
  swipeLeft?: SwipeHandler;
  swipeRight?: SwipeHandler;
  swipeUp?: SwipeHandler;
  swipeDown?: SwipeHandler;
}): [TouchEventHandler<HTMLElement>, TouchEventHandler<HTMLElement>] {
  const [touchPrevious, setTouchPrevious] = useState({ x: 0, y: 0 });
  const touchStartedListener: TouchEventHandler<HTMLElement> = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      setTouchPrevious({
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY,
      });
    },
    [setTouchPrevious]
  );
  const touchEndedListener: TouchEventHandler<HTMLElement> = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      const xDiff = touchPrevious.x - event.changedTouches[0].clientX;
      const yDiff = touchPrevious.y - event.changedTouches[0].clientY;

      const xAbs = Math.abs(xDiff);
      const yAbs = Math.abs(yDiff);

      if (xAbs > yAbs) {
        if (xDiff > 0) {
          actions.swipeRight?.();
        } else {
          actions.swipeLeft?.();
        }
      } else {
        if (yDiff > 0) {
          actions.swipeDown?.();
        } else {
          actions.swipeUp?.();
        }
      }
    },
    [touchPrevious, actions]
  );

  return [touchStartedListener, touchEndedListener];
}
