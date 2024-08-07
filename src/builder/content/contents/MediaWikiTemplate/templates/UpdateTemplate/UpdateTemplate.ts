import { UpdateTemplateParams } from "./UpdateTemplate.types";
import { MediaWikiTemplate } from "../../MediaWikiTemplate";
import { Template } from "../Template";

export class UpdateTemplate extends Template {
  category: string;
  date: string;
  url: string;

  constructor(params: UpdateTemplateParams) {
    super("Update");
    this.category = params.category;
    this.date = params.date;
    this.url = params.url;
  }

  build() {
    const updateTemplate = new MediaWikiTemplate(this.name);
    updateTemplate.add("date", this.date);
    updateTemplate.add("url", this.url);
    updateTemplate.add("category", this.category);
    return updateTemplate;
  }
}
