import { MediaWikiBreak } from "./MediaWikiBreak";

describe("MediaWikiBreak", () => {
  test("it should build correctly", () => {
    const result = new MediaWikiBreak();
    expect(result.build()).toBe("\n");
  });
});
