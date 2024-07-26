import { MediaWikiText } from "./MediaWikiText";

describe("MediaWikiText", () => {
  test("no formatting", () => {
    expect(new MediaWikiText("test").build()).toBe("test");
  });

  test("bold", () => {
    expect(new MediaWikiText("test", { bold: true }).build()).toBe(
      "'''test'''"
    );
  });

  test("italics", () => {
    expect(new MediaWikiText("test", { italics: true }).build()).toBe(
      "''test''"
    );
  });

  test("underline", () => {
    expect(new MediaWikiText("test", { underline: true }).build()).toBe(
      "<u>test</u>"
    );
  });
});
