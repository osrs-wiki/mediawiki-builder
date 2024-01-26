import MediaWikiContent from "../content";

type DateOptions = {
  day: boolean;
  month: boolean;
  year: boolean;
};

class MediaWikiDate extends MediaWikiContent {
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
    return `[[${this.options.day ? this.date.getDate() : ""}${
      this.options.day && this.options.month ? " " : ""
    }${
      this.options.month
        ? this.date.toLocaleString("default", { month: "long" })
        : ""
    }]] ${
      this.options.year ? "[[" + this.date.getFullYear() + "]]" : ""
    }`.trim();
  }
}

export default MediaWikiDate;
