import MediaWikiContent from "../content";

export class MediaWikiTOC extends MediaWikiContent {
  constructor() {
    super();
  }

  build() {
    return "__TOC__\n";
  }
}
