import MediaWikiContent from "../content";
import { toKeyValueString } from "../utils/objects";

export type MediaWikiTableParams = {
  caption?: string;
  rows: MediaWikiTableRow[];
  options?: MediaWikiTableOptions;
};

export type MediaWikiTableRow = {
  cells: MediaWikiTableCell[];
  header?: boolean;
  minimal?: boolean;
  options?: MediaWikiTableRowOptions;
};

export type MediaWikiTableCell = {
  content: MediaWikiContent[];
  options?: MediaWikiTableCellOptions;
};

export type MediaWikiTableOptions = {
  class?: string;
  style?: string;
};

export type MediaWikiTableRowOptions = {
  class?: string;
  style?: string;
};

export type MediaWikiTableCellOptions = {
  class?: string;
  colspan?: number;
  rowspan?: number;
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
      ? " " + toKeyValueString<MediaWikiTableOptions>(this.options)
      : "";
    return `{|${tableOptions}\n${
      this.caption ? `|+${this.caption}\n` : ""
    }${this.rows
      .map(
        (row) =>
          `|-${
            row.options
              ? " " + toKeyValueString<MediaWikiTableRowOptions>(row.options)
              : ""
          }\n` +
          row.cells
            .map(
              (cell, cellIndex) =>
                (row.header ? `!` : `|`).repeat(
                  row.minimal && cellIndex > 0 ? 2 : 1
                ) +
                " " +
                (cell.options
                  ? `${toKeyValueString<MediaWikiTableCellOptions>(
                      cell.options
                    )} | `
                  : "") +
                cell.content.map((content) => content.build()).join("") +
                (row.minimal ? "" : "\n")
            )
            .join(row.minimal ? " " : "") +
          (row.minimal ? "\n" : "")
      )
      .join("")}|}`;
  }
}
