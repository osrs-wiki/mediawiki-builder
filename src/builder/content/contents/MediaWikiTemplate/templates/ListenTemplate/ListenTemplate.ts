import { ListenAlignment, ListeTemplateOptions } from "./ListenTemplate.types";
import { MediaWikiTemplate } from "../../MediaWikiTemplate";
import { Template } from "../Template";

export class ListenTemplate extends Template {
  align?: ListenAlignment;
  fileName: string;
  title?: string;

  constructor(fileName: string, options?: ListeTemplateOptions) {
    super("Listen");
    this.fileName = fileName;
    this.align = options?.align;
    this.title = options?.title;
  }

  build() {
    const listenTemplate = new MediaWikiTemplate(this.name);
    listenTemplate.add("filename", this.fileName);
    if (this.align) {
      listenTemplate.add("align", this.align);
    }
    if (this.title) {
      listenTemplate.add("title", this.title);
    }
    return listenTemplate;
  }
}
