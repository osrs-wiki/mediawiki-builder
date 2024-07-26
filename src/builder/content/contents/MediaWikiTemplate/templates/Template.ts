import { MediaWikiTemplate } from "../MediaWikiTemplate";

export abstract class Template {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract build(): MediaWikiTemplate;
}
