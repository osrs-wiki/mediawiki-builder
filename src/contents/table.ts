import MediaWikiContent from "../content";

export type MediaWikiTableRow = {
  cells: MediaWikiTableCell[];
  header?: boolean;
  options?: MediaWikiCellOptions;
};

export type MediaWikiTableCell = {
  content: MediaWikiContent[];
  options?: MediaWikiCellOptions;
};

export type MediaWikiTableParams = {
  caption?: string;
  rows: MediaWikiTableRow[];
  options?: MediaWikiTableOptions;
};

export type MediaWikiTableOptions = {
  class?: string;
  style?: string;
};

export type MediaWikiCellOptions = {
  class?: string;
  colspan?: string;
  rowspan?: string;
  style?: string;
};

export class MediaWikiTable extends MediaWikiContent {
  caption?: string;
  options?: MediaWikiTableOptions;
  rows: MediaWikiTableRow[];

  constructor(params: MediaWikiTableParams) {
    super();
    this.caption = params.caption;
    this.rows = params.rows;
    this.options = params.options;
  }

  build() {
    const tableOptions = this.options
      ? Object.keys(this.options).reduce(
          (total, key) =>
            `${total} ${key}="${
              this.options?.[key as keyof MediaWikiTableOptions]
            }"`,
          ""
        )
      : "";
    return `{|${tableOptions}\n${
      this.caption ? `|+${this.caption}\n` : ""
    }${this.rows
      .map(
        (row) =>
          `|-\n` +
          row.cells
            .map(
              (cell) =>
                (row.header ? `!` : `|`) +
                cell.content.map((content) => content.build()).join("") +
                "\n"
            )
            .join("")
      )
      .join("")}|}`;
  }
}
