import { InfoboxTemplate } from "./InfoboxTemplate";

describe("InfoboxTemplate", () => {
  it("should build with name and params", () => {
    expect(new InfoboxTemplate("Test", { test: "test" }).build().build()).toBe(
      "{{Infobox Test|test=test}}\n"
    );
  });
});
