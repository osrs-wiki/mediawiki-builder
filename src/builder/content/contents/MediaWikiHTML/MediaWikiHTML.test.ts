import { MediaWikiHTML } from "./MediaWikiHTML";
import { MediaWikiText } from "../MediaWikiText/MediaWikiText";

describe("MediaWikiHTML", () => {
  test("it should build correctly", () => {
    const result = new MediaWikiHTML("center", [new MediaWikiText("test")]);
    expect(result.build()).toBe("<center>\ntest\n</center>\n");
  });

  test("it should build correctly with params", () => {
    const result = new MediaWikiHTML(
      "center",
      [new MediaWikiText("test"), new MediaWikiText("test2", { bold: true })],
      { param: "123" }
    );
    expect(result.build()).toBe(
      "<center param=\"123\">\ntest'''test2'''\n</center>\n"
    );
  });

  test("it should build correctly with collapsed option", () => {
    const result = new MediaWikiHTML(
      "center",
      [new MediaWikiText("test")],
      {},
      { collapsed: true }
    );
    expect(result.build()).toBe("<center>test</center>");
  });

  test("it should build correctly with empty children", () => {
    const result = new MediaWikiHTML("br");
    expect(result.build()).toBe("<br/>");
  });
});
