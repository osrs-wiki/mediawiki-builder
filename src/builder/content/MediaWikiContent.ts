import { MediaWikiContents } from "./MediaWikiContent.types";
import { buildContents } from "./MediaWikiContent.utils";

abstract class MediaWikiContent {
  children?: MediaWikiContents;

  constructor(children?: MediaWikiContents) {
    this.children = children;
  }

  abstract build(): string;

  buildChildren(): string {
    return this.children ? buildContents(this.children) : "";
  }
}

export default MediaWikiContent;
