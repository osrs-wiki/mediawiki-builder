import { MediaWikiSeparator } from "./MediaWikiSeparator";

describe("MediaWikiSeparator", () => {
  test("it should build correctly", () => {
    const header = new MediaWikiSeparator();
    expect(header.build()).toBe("----");
  });
});
