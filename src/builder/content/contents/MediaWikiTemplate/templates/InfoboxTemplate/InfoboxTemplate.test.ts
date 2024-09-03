import { InfoboxTemplate } from "./InfoboxTemplate";

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
});
