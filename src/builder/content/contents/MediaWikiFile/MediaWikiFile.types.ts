import { MediaWikiContents } from "../../MediaWikiContent.types";

export type FileFormat = "frameless" | "frame" | "thumb";

export type FileHorizontalAlignment = "left" | "right" | "center" | "none";

export type FileVerticalAlignment =
  | "baseline"
  | "sub"
  | "super"
  | "top"
  | "text-top"
  | "bottom"
  | "text-bottom";

export type FileResizing = {
  width?: number;
  height?: number;
};

export type MediaWikiFileOptions = {
  caption?: MediaWikiContents;
  format?: FileFormat;
  resizing?: FileResizing;
  horizontalAlignment?: FileHorizontalAlignment;
  verticalAlignment?: FileVerticalAlignment;
  link?: string;
};
