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

  test("buildContents filters out undefined elements", () => {
    // Test the safety filter by creating an array with undefined elements
    const contentArray = [
      new MediaWikiContentTest(),
      undefined,
      new MediaWikiContentTest(),
    ] as (MediaWikiContentTest | undefined)[];

    expect(buildContents(contentArray as MediaWikiContent[])).toBe("testtest");
  });

  test("buildContents filters out null elements", () => {
    // Test the safety filter by creating an array with null elements
    const contentArray = [
      new MediaWikiContentTest(),
      null,
      new MediaWikiContentTest(),
    ] as (MediaWikiContentTest | null)[];

    expect(buildContents(contentArray as MediaWikiContent[])).toBe("testtest");
  });

  test("buildContents filters out objects without build method", () => {
    // Test the safety filter by creating an array with invalid objects
    const invalidObject = { notABuildMethod: () => "should not appear" };
    const contentArray = [
      new MediaWikiContentTest(),
      invalidObject,
      new MediaWikiContentTest(),
    ] as (MediaWikiContentTest | typeof invalidObject)[];

    expect(buildContents(contentArray as MediaWikiContent[])).toBe("testtest");
  });

  test("buildContents handles array with all invalid elements", () => {
    // Test with array containing only invalid elements
    const invalidArray = [undefined, null, {}] as (undefined | null | object)[];
    expect(buildContents(invalidArray as MediaWikiContent[])).toBe("");
  });

  test("buildContents handles empty array", () => {
    expect(buildContents([])).toBe("");
  });

  test("buildContents handles mixed valid and invalid elements", () => {
    const validElement1 = new MediaWikiContentTest();
    const validElement2 = new MediaWikiContentTest();
    const invalidObject = { someProperty: "value" };
    const invalidBuildObject = { build: "not a function" };

    const mixedArray = [
      validElement1,
      undefined,
      null,
      invalidObject,
      validElement2,
      invalidBuildObject,
    ] as (
      | MediaWikiContentTest
      | undefined
      | null
      | typeof invalidObject
      | typeof invalidBuildObject
    )[];

    expect(buildContents(mixedArray as MediaWikiContent[])).toBe("testtest");
  });
});
