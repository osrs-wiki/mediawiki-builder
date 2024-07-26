import MediaWikiContent from "../../MediaWikiContent";

export class MediaWikiTOC extends MediaWikiContent {
  constructor() {
    super();
  }

  build() {
    return "__TOC__\n";
  }
}
