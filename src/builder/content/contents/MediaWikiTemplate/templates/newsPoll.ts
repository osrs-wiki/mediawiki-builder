import { Template } from "./types";
import { MediaWikiTemplate } from "../MediaWikiTemplate";

export class NewsPollTemplate extends Template {
  number?: number;
  question: string;

  constructor(question: string, number?: number) {
    super("News Poll");
    this.number = number;
    this.question = question;
  }

  build() {
    const newsPollTemplate = new MediaWikiTemplate(this.name);
    if (this.number) {
      newsPollTemplate.add("", this.number?.toString());
    }
    newsPollTemplate.add(this.number ? "" : "qtext", this.question);
    return newsPollTemplate;
  }
}