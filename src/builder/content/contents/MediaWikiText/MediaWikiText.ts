import { MediaWikiTextStyling } from "./MediaWikiText.types";
import MediaWikiContent from "../../MediaWikiContent";
import { MediaWikiContents } from "../../MediaWikiContent.types";

export class MediaWikiText extends MediaWikiContent {
  styling?: MediaWikiTextStyling;

  constructor(value: MediaWikiContents, styling?: MediaWikiTextStyling) {
    super(value);
    this.styling = styling;
  }

  build() {
    let builtValue = this.buildChildren();
    if (builtValue === "") {
      return "";
    }
    if (this.styling?.bold) {
      builtValue = `'''${builtValue}'''`;
    }
    if (this.styling?.italics) {
      builtValue = `''${builtValue}''`;
    }
    if (this.styling?.underline) {
      builtValue = `<u>${builtValue}</u>`;
    }
    return `${builtValue}`;
  }
}
