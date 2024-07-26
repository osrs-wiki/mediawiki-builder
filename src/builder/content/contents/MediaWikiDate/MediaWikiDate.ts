import { DateOptions } from "./MediaWikiDate.types";
import MediaWikiContent from "../../MediaWikiContent";

export class MediaWikiDate extends MediaWikiContent {
  date: Date;
  options: DateOptions;

  constructor(
    date: Date,
    options: DateOptions = { day: true, month: true, year: true }
  ) {
    super();
    this.date = date;
    this.options = options;
  }

  build() {
    return (
      (this.options.day || this.options.month
        ? `[[${this.options.day ? this.date.getDate() : ""}${
            this.options.day && this.options.month ? " " : ""
          }${
            this.options.month
              ? this.date.toLocaleString("default", { month: "long" })
              : ""
          }]]${this.options.year ? " " : ""}`
        : "") +
      `${this.options.year ? "[[" + this.date.getFullYear() + "]]" : ""}`.trim()
    );
  }
}
