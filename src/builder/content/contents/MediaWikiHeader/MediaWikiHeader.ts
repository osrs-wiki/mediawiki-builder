import MediaWikiContent from "../../MediaWikiContent";
import { MediaWikiContents } from "../../MediaWikiContent.types";

export class MediaWikiHeader extends MediaWikiContent {
  level: number;

  constructor(value: MediaWikiContents, level: number) {
    super(value);
    this.level = level;
  }

  build() {
    const parsedValue = this.buildChildren();
    return `${"=".repeat(this.level)}${parsedValue.trim()}${"=".repeat(
      this.level
    )}`;
  }
}
