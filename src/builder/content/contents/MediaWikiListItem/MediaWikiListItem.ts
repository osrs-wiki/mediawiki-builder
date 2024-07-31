import { MediaWikiListItemOptions } from "./MediaWikiListItem.types";
import MediaWikiContent from "../../MediaWikiContent";
import { MediaWikiContents } from "../../MediaWikiContent.types";

export class MediaWikiListItem extends MediaWikiContent {
  options: MediaWikiListItemOptions;

  constructor(value: MediaWikiContents, options: MediaWikiListItemOptions) {
    super(value);
    this.options = options;
  }

  build() {
    const parsedValue = this.buildChildren();
    return `\n${(this.options.ordered ? "#" : "*").repeat(
      this.options.level
    )} ${parsedValue.trim()}`;
  }
}
