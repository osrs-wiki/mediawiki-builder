import { MediaWikiText } from "../MediaWikiText/MediaWikiText";

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
  caption?: MediaWikiText;
  format?: FileFormat;
  resizing?: FileResizing;
  horizontalAlignment?: FileHorizontalAlignment;
  verticalAlignment?: FileVerticalAlignment;
  link?: string;
};
