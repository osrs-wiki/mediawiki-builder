import MediaWikiContent from "../content";

export type MediaWikiHTMLOptions = {
  collapsed?: boolean;
};

export class MediaWikiHTML extends MediaWikiContent {
  attributes?: { [key: string]: string };
  tag: string;
  options?: MediaWikiHTMLOptions;

  constructor(
    tag: string,
    children: MediaWikiContent[],
    attributes?: { [key: string]: string },
    options?: MediaWikiHTMLOptions
  ) {
    super(children);
    this.tag = tag;
    this.attributes = attributes;
    this.options = options;
  }

  build() {
    return `<${this.tag}${
      this.attributes
        ? Object.keys(this.attributes).map(
            (key) => ` ${key}=\"${this.attributes?.[key]}\"`
          )
        : ""
    }>${this.options?.collapsed ? "" : "\n"}${this.buildChildren()}${
      this.options?.collapsed ? "" : "\n"
    }</${this.tag}>${this.options?.collapsed ? "" : "\n"}`;
  }
}
