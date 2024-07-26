import { MediaWikiLink } from "./MediaWikiLink";

describe("MediaWikiBreak", () => {
  it("should build correctly with a label", () => {
    const result = new MediaWikiLink("TestPage", "Label");
    expect(result.build()).toBe("[[TestPage|Label]]");
  });

  it("should build correctly without a label", () => {
    const result = new MediaWikiLink("TestPage");
    expect(result.build()).toBe("[[TestPage]]");
  });
});
