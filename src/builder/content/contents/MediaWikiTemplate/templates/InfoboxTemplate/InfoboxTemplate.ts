import { capitalize } from "../../../../../../utils/strings";
import MediaWikiContent from "../../../../MediaWikiContent";
import { MediaWikiTemplate } from "../../MediaWikiTemplate";
import { Template } from "../Template";

export class InfoboxTemplate<T> extends Template {
  params: T;

  constructor(name: string, params: T) {
    super(`Infobox ${capitalize(name)}`);
    this.params = params;
  }

  build() {
    const params = this.params;
    const infoboxTemplate = new MediaWikiTemplate(this.name);
    Object.keys(this.params).forEach((key) => {
      const value = params[key as keyof T];
      if (value !== undefined) {
        let parsedValue = "";
        if (typeof value === "boolean") {
          parsedValue = value ? "Yes" : "No";
        } else if (value instanceof MediaWikiContent) {
          parsedValue = value.build();
        } else if (Array.isArray(value)) {
          if (value.length > 0 && value.every((v) => v instanceof MediaWikiContent)) {
            parsedValue = value
              .filter((v) => v && v !== null)
              .map((v) => (v instanceof MediaWikiContent ? v.build() : `${v}`))
              .join(" ");
          } else {
            parsedValue = value.filter((v) => v && v !== null).join(", ");
          }
        } else if (value) {
          parsedValue = `${value}`;
        }
        infoboxTemplate.add(key, parsedValue);
      }
    });
    return infoboxTemplate;
  }
}
