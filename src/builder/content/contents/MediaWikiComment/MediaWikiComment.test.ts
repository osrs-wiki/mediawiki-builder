import { MediaWikiComment } from "./MediaWikiComment";

describe("MediaWikiComment", () => {
  test("it should build correctly", () => {
    const result = new MediaWikiComment("test");
    expect(result.build()).toBe("<!-- test -->");
  });
});
