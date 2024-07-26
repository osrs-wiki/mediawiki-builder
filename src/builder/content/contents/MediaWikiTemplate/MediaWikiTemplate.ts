import {
  MediaWikiTemplateParam,
  MediaWikiTemplateOptions,
} from "./MediaWikiTemplate.types";
import MediaWikiContent from "../../MediaWikiContent";

export class MediaWikiTemplate extends MediaWikiContent {
  name: string;
  params: MediaWikiTemplateParam[];
  options?: MediaWikiTemplateOptions;

  constructor(name: string, options?: MediaWikiTemplateOptions) {
    super();
    this.name = name;
    this.params = [];
    this.options = options;
  }

  add(key: string, value: string) {
    this.params.push({ key, value });
  }

  build() {
    const collapsed = this.options?.collapsed || this.params.length < 4;
    const params = this.params.reduce(
      (allParams, param) =>
        `${allParams}${collapsed ? "" : "\n"}|${
          param.key ? param.key + (collapsed ? "=" : " = ") : ""
        }${param.value}`,
      ""
    );
    return `{{${this.name}${params}${collapsed ? "" : "\n"}}}\n`;
  }
}
