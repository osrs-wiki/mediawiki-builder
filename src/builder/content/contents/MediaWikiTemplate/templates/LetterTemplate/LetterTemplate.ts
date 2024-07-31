import MediaWikiContent from "../../../../MediaWikiContent";
import { MediaWikiContents } from "../../../../MediaWikiContent.types";
import { MediaWikiTemplate } from "../../MediaWikiTemplate";
import { Template } from "../Template";

export class LetterTemplate extends Template {
  value: MediaWikiContents | string;

  constructor(value: MediaWikiContents | string) {
    super("Letter");
    this.value = value;
  }

  build() {
    const parsedValue = Array.isArray(this.value)
      ? this.value.reduce(
          (value, content) => (content ? value + "" + content.build() : value),
          ""
        )
      : this.value instanceof MediaWikiContent
      ? this.value.build()
      : this.value;
    const letterTemplate = new MediaWikiTemplate(this.name);
    letterTemplate.add("", parsedValue);
    return letterTemplate;
  }
}
