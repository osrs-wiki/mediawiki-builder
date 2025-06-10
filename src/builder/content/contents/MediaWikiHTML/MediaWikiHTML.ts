import { MediaWikiHTMLOptions } from "./MediaWikiHTML.types";
import MediaWikiContent from "../../MediaWikiContent";

export class MediaWikiHTML extends MediaWikiContent {
  attributes?: { [key: string]: string };
  tag: string;
  options?: MediaWikiHTMLOptions;

  constructor(
    tag: string,
    children?: MediaWikiContent[],
    attributes?: { [key: string]: string },
    options?: MediaWikiHTMLOptions
  ) {
    super(children);
    this.tag = tag;
    this.attributes = attributes;
    this.options = options;
  }

  build() {
    const attributes = this.attributes
      ? Object.keys(this.attributes).map(
          (key) => ` ${key}=\"${this.attributes?.[key]}\"`
        )
      : "";
    const children = this.buildChildren();
    if (children.length === 0) {
      return `<${this.tag}${attributes}/>`;
    }
    return `<${this.tag}${attributes}>${
      this.options?.collapsed ? "" : "\n"
    }${children}${this.options?.collapsed ? "" : "\n"}</${this.tag}>${
      this.options?.collapsed ? "" : "\n"
    }`;
  }
}
