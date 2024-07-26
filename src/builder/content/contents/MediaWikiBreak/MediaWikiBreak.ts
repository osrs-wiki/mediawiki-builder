import MediaWikiContent from "../../MediaWikiContent";

export class MediaWikiBreak extends MediaWikiContent {
  constructor() {
    super();
  }

  build() {
    return "\n";
  }
}
