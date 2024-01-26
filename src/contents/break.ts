import MediaWikiContent from "../content";

export class MediaWikiBreak extends MediaWikiContent {
  constructor() {
    super();
  }

  build() {
    return "\n";
  }
}
