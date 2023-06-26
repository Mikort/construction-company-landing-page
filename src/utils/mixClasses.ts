export function mixClasses(
  ...classNames: (string | undefined | null)[]
): string {
  return classNames
    .filter((className) => className != null && className.trim() !== "")
    .join(" ");
}
