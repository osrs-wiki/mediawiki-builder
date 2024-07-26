import { MediaWikiTextStyling } from "./MediaWikiText.types";
import MediaWikiContent from "../../MediaWikiContent";

export class MediaWikiText extends MediaWikiContent {
  value: string;
  styling?: MediaWikiTextStyling;

  constructor(value: string, styling?: MediaWikiTextStyling) {
    super();
    this.value = value;
    this.styling = styling;
  }

  build() {
    if (this.value === "") {
      return this.value;
    }
    if (this.styling?.bold) {
      this.value = `'''${this.value}'''`;
    }
    if (this.styling?.italics) {
      this.value = `''${this.value}''`;
    }
    if (this.styling?.underline) {
      this.value = `<u>${this.value}</u>`;
    }
    return `${this.value}`;
  }
}
