import MediaWikiContent from "../../MediaWikiContent";

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
