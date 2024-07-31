import MediaWikiContent from "../../MediaWikiContent";
import { MediaWikiContents } from "../../MediaWikiContent.types";

export class MediaWikiExternalLink extends MediaWikiContent {
  link: string;

  constructor(label: MediaWikiContents, link: string) {
    super(label);
    this.link = link;
  }

  build() {
    return `[${this.link} ${this.buildChildren()}]`;
  }
}
