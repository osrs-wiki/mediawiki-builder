import MediaWikiContent from "../content";

export class MediaWikiHeader extends MediaWikiContent {
  value?: string;
  level: number;

  constructor(
    value: string | MediaWikiContent | MediaWikiContent[],
    level: number
  ) {
    super(
      Array.isArray(value) || value instanceof MediaWikiContent
        ? value
        : undefined
    );
    this.value = typeof value === "string" ? (value as string) : undefined;
    this.level = level;
  }

  build() {
    let parsedValue = "";
    if (this.children) {
      parsedValue = this.buildChildren();
    } else if (this.value) {
      parsedValue = this.value;
    }
    return `${"=".repeat(this.level)}${parsedValue.trim()}${"=".repeat(
      this.level
    )}`;
  }
}
