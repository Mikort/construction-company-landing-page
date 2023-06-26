import { TextProps } from "components/Text/Text";
import { BaseProps } from "src/BaseProps.interface";
import styleClasses from "./Text.module.css";
import block from "bem-css-modules";
import { useMemo } from "react";

const classes = block(styleClasses);

export type TextStyleProps = Omit<
  TextProps,
  keyof BaseProps | "children" | "type"
>;

export function useTextStyleClasses({
  fontWeight = "400",
  lineHeight = "32px",
  fontSize = "16px",
  color = "secondary-1000",
}: TextStyleProps) {
  return useMemo(
    () => classes({ fontWeight, lineHeight, fontSize, color }),
    [fontWeight, lineHeight, fontSize, color]
  );
}
