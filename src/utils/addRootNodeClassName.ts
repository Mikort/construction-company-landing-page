import React from "react";

export function addRootNodeClassName(
  element: React.ReactElement<{ className?: string }>,
  className: string | undefined
) {
  if (className === undefined) {
    return element;
  }

  return React.cloneElement(element, {
    className: [element.props?.className, className].join(" "),
  });
}
