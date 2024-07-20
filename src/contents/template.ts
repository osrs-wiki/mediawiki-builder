import MediaWikiContent from "../content";

export type TemplateParam = { key: string; value: string };

export type TemplateOptions = { collapsed?: boolean };

export class MediaWikiTemplate extends MediaWikiContent {
  name: string;
  params: TemplateParam[];
  options?: TemplateOptions;

  constructor(name: string, options?: TemplateOptions) {
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
