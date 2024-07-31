import { MediaWikiText } from "./MediaWikiText";
import { MediaWikiExternalLink } from "../MediaWikiExternalLink";

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

  test("bold link", () => {
    expect(
      new MediaWikiText(new MediaWikiExternalLink("test", "test.com"), {
        bold: true,
      }).build()
    ).toBe("'''[test.com test]'''");
  });

  test("italics link", () => {
    expect(
      new MediaWikiText(new MediaWikiExternalLink("test", "test.com"), {
        italics: true,
      }).build()
    ).toBe("''[test.com test]''");
  });

  test("underline link", () => {
    expect(
      new MediaWikiText(new MediaWikiExternalLink("test", "test.com"), {
        underline: true,
      }).build()
    ).toBe("<u>[test.com test]</u>");
  });
});
