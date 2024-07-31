import MediaWikiContent from "./MediaWikiContent";
import { buildContents } from "./MediaWikiContent.utils";

class MediaWikiContentTest extends MediaWikiContent {
  build(): string {
    return "test";
  }
}

describe("MediaWikiContent utils", () => {
  test("buildContents string", () => {
    expect(buildContents("test")).toBe("test");
  });

  test("buildContents MediaWikiContent", () => {
    expect(buildContents(new MediaWikiContentTest())).toBe("test");
  });

  test("buildContents MediaWikiContent array", () => {
    expect(
      buildContents([new MediaWikiContentTest(), new MediaWikiContentTest()])
    ).toBe("testtest");
  });
});
