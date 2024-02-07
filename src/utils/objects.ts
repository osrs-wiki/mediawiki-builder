/**
 * Convert an object to a key=value string.
 *  { a: "1", b: "2 "} => 'a="1" b="2"'
 * @param options The object to convert to a key=value string.
 * @returns
 */
export const toKeyValueString = <T>(options: T) => {
  return Object.keys(options).reduce(
    (total, key) =>
      `${total ? total + " " : ""}${key}="${options?.[key as keyof T]}"`,
    ""
  );
};
