import MediaWikiContent from "../content";

export class MediaWikiVideo extends MediaWikiContent {
  label: string;
  link: string;

  constructor(label: string, link: string) {
    super();
    this.label = label;
    this.link = link;
  }

  build() {
    return `<center><big><big>[${this.link} ${this.label}]</big></big></center>\n`;
  }
}
