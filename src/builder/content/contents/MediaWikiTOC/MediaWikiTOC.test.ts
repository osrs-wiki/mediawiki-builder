import { MediaWikiTOC } from "../../../../../dist";

describe("MediaWikiTOC", () => {
  it("should render correctly", () => {
    expect(new MediaWikiTOC().build()).toBe("__TOC__\n");
  });
});
