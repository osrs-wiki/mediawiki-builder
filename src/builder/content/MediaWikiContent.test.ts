import MediaWikiContent from "./MediaWikiContent";

class MediaWikiContentChild extends MediaWikiContent {
  build(): string {
    return "test";
  }
}

class MediaWikiContentParent extends MediaWikiContent {
  build(): string {
    return this.buildChildren();
  }
}

describe("MediaWikiContent", () => {
  test("no children", () => {
    expect(new MediaWikiContentParent().build()).toBe("");
  });

  test("children string", () => {
    expect(new MediaWikiContentParent("test").build()).toBe("test");
  });

  test("children MediaWikiContent non-array", () => {
    expect(
      new MediaWikiContentParent(new MediaWikiContentChild()).build()
    ).toBe("test");
  });

  test("children MediaWikiContent array", () => {
    expect(
      new MediaWikiContentParent([
        new MediaWikiContentChild(),
        new MediaWikiContentChild(),
      ]).build()
    ).toBe("testtest");
  });
});
