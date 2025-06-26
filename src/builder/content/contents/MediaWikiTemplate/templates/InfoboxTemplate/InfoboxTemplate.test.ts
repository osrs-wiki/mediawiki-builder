import { InfoboxTemplate } from "./InfoboxTemplate";
import { MediaWikiText } from "../../../MediaWikiText";

describe("InfoboxTemplate", () => {
  it("should build with name and params", () => {
    expect(new InfoboxTemplate("Test", { test: "test" }).build().build()).toBe(
      "{{Infobox Test|test=test}}\n"
    );
  });

  it("should build with falsey values", () => {
    expect(new InfoboxTemplate("Test", { test: false }).build().build()).toBe(
      "{{Infobox Test|test=No}}\n"
    );
  });

  it("should build with MediaWikiContent values", () => {
    const content = new InfoboxTemplate("Test", {
      test: new MediaWikiText("MediaWikiContent"),
    });
    expect(content.build().build()).toBe(
      "{{Infobox Test|test=MediaWikiContent}}\n"
    );
  });

  it("should build with array values", () => {
    const content = new InfoboxTemplate("Test", {
      test: [new MediaWikiText("Item1"), new MediaWikiText("Item2")],
    });
    expect(content.build().build()).toBe("{{Infobox Test|test=Item1 Item2}}\n");
  });

  it("should build with mixed values", () => {
    const content = new InfoboxTemplate("Test", {
      test: [new MediaWikiText("Item1"), "Item2", 3],
    });
    expect(content.build().build()).toBe(
      "{{Infobox Test|test=Item1 Item2 3}}\n"
    );
  });

  it("should build with an array of strings and numbers", () => {
    const content = new InfoboxTemplate("Test", {
      test: ["Item1", "Item2", 3, 4],
    });
    expect(content.build().build()).toBe(
      "{{Infobox Test|test=Item1, Item2, 3, 4}}\n"
    );
  });

  it("should build with 0 number value", () => {
    const content = new InfoboxTemplate("Test", {
      test: 0,
    });
    expect(content.build().build()).toBe("{{Infobox Test|test=0}}\n");
  });
});
