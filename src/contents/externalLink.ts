import MediaWikiContent from "../content";

export class MediaWikiExternalLink extends MediaWikiContent {
  label: string;
  link: string;

  constructor(label: string, link: string) {
    super();
    this.label = label;
    this.link = link;
  }

  build() {
    return `[${this.link} ${this.label}]`;
  }
}
