import { MediaWikiContents } from "../../../../MediaWikiContent.types";
import { buildContents } from "../../../../MediaWikiContent.utils";
import { MediaWikiTemplate } from "../../MediaWikiTemplate";
import { Template } from "../Template";

export class LetterTemplate extends Template {
  value: MediaWikiContents | string;

  constructor(value: MediaWikiContents | string) {
    super("Letter");
    this.value = value;
  }

  build() {
    const letterTemplate = new MediaWikiTemplate(this.name);
    letterTemplate.add("", buildContents(this.value));
    return letterTemplate;
  }
}
