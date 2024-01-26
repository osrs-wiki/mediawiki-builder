import MediaWikiContent from "../../../content";
import MediaWikiTemplate from "../../template";
import { Template } from "../types";

export type InfoboxNo = "No";
export type InfoboxYesNo = "Yes" | InfoboxNo;

class InfoboxTemplate<T> extends Template {
  params: T;

  constructor(name: string, params: T) {
    super(`Infobox ${name}`);
    this.params = params;
  }

  build() {
    const params = this.params;
    const infoboxTemplate = new MediaWikiTemplate(this.name);
    Object.keys(this.params).forEach((key) => {
      const value = params[key as keyof T];
      let parsedValue = "";
      if (typeof value === "boolean") {
        parsedValue = value ? "Yes" : "No";
      } else if (value instanceof MediaWikiContent) {
        parsedValue = value.build();
      } else if (Array.isArray(value)) {
        parsedValue = value.filter((v) => v && v !== null).join(", ");
      } else if (value) {
        parsedValue = `${value}`;
      }
      infoboxTemplate.add(key, parsedValue);
    });
    return infoboxTemplate;
  }
}

export default InfoboxTemplate;
