import { MediaWikiExternalLink } from "./MediaWikiExternalLink";

describe("MediaWikiExternalLink", () => {
  test("it should build correctly", () => {
    const result = new MediaWikiExternalLink("test", "https://test.com");
    expect(result.build()).toBe("[https://test.com test]");
  });
});
