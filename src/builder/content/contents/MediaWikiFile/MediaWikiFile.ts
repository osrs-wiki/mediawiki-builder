import { MediaWikiFileOptions } from "./MediaWikiFile.types";
import MediaWikiContent from "../../MediaWikiContent";
import { buildContents } from "../../MediaWikiContent.utils";

export class MediaWikiFile extends MediaWikiContent {
  fileName: string;
  options?: MediaWikiFileOptions;

  constructor(fileName: string, options?: MediaWikiFileOptions) {
    super();
    this.fileName = fileName;
    this.options = options;
  }

  build() {
    let options = "";
    const {
      caption,
      format,
      resizing,
      horizontalAlignment,
      verticalAlignment,
      link,
    } = this.options ?? {};
    if (format) {
      options += `|${format}`;
    }
    if (resizing?.width && resizing?.height) {
      options += `|${resizing.width}x${resizing.height}px`;
    } else if (resizing?.width) {
      options += `|${resizing.width}px`;
    } else if (resizing?.height) {
      options += `|${resizing.height}px`;
    }
    if (horizontalAlignment) {
      options += `|${horizontalAlignment}`;
    }
    if (verticalAlignment) {
      options += `|${verticalAlignment}`;
    }
    if (caption) {
      options += `|${buildContents(caption)}`;
    }
    if (link) {
      options += `|link=${link}`;
    }
    return `[[File:${this.fileName}${options}]]`;
  }
}
