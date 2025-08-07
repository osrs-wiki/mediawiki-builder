import { MediaWikiContents } from "./MediaWikiContent.types";

/**
 * Build one or more MediaWikiContent
 * @param contents Either a single MediaWikiContent or an array of MediaWikiContent
 * @returns A resulting string value of building all content.
 */
export const buildContents = (contents: string | MediaWikiContents): string => {
  if (typeof contents === "string") {
    return contents;
  }
  return Array.isArray(contents)
    ? contents
        .filter(
          (content) => content != null && typeof content.build === "function"
        )
        .reduce((value, content) => (value += content.build()), "")
    : contents.build();
};
