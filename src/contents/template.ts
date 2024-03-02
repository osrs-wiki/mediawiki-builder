import MediaWikiContent from "../content";

export type TemplateParam = { key: string; value: string };

export class MediaWikiTemplate extends MediaWikiContent {
  name: string;
  params: TemplateParam[];

  constructor(name: string) {
    super();
    this.name = name;
    this.params = [];
  }

  add(key: string, value: string) {
    this.params.push({ key, value });
  }

  build() {
    const expanded = this.params.length > 3;
    const params = this.params.reduce(
      (allParams, param) =>
        `${allParams}${this.params.length > 3 ? "\n" : ""}|${
          param.key ? param.key + (expanded ? " = " : "=") : ""
        }${param.value}`,
      ""
    );
    return `{{${this.name}${params}${expanded ? "\n" : ""}}}\n`;
  }
}
