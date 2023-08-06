import { MouseEventHandler } from "react";

export const stopPropagation: MouseEventHandler = (e) => {
  e.stopPropagation();
};
