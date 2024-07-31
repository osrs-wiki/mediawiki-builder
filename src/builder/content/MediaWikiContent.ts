import { MediaWikiContents } from "./MediaWikiContent.types";

abstract class MediaWikiContent {
  children?: MediaWikiContents;

  constructor(children?: MediaWikiContents) {
    this.children = children;
  }

  abstract build(): string;

  buildChildren(): string {
    if (this.children && Array.isArray(this.children)) {
      return this.children.reduce(
        (value, content) => (content ? value + "" + content.build() : value),
        ""
      );
    } else if (this.children && this.children instanceof MediaWikiContent) {
      return this.children.build();
    } else if (this.children) {
      return this.children;
    }
    return "";
  }
}

export default MediaWikiContent;
