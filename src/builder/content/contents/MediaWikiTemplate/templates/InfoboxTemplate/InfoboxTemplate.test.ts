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
});
