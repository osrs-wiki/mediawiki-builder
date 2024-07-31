import { MediaWikiExternalLink } from "./MediaWikiExternalLink";
import { MediaWikiText } from "../MediaWikiText";

describe("MediaWikiExternalLink", () => {
  test("string label", () => {
    const result = new MediaWikiExternalLink("test", "https://test.com");
    expect(result.build()).toBe("[https://test.com test]");
  });

  test("MediaWikiText label", () => {
    const result = new MediaWikiExternalLink(
      new MediaWikiText("test", { bold: true }),
      "https://test.com"
    );
    expect(result.build()).toBe("[https://test.com '''test''']");
  });
});
