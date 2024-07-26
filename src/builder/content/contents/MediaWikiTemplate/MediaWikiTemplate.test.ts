import { MediaWikiTemplate } from "./MediaWikiTemplate";

describe("MediaWikiTemplate", () => {
  test("it should render flattened with less than 4 params", () => {
    const template = new MediaWikiTemplate("test");
    template.add("one", "one");
    template.add("two", "two");
    template.add("three", "three");

    expect(template.build()).toMatchSnapshot();
  });

  test("it should render expanded with 4 or more params", () => {
    const template = new MediaWikiTemplate("test");
    template.add("one", "one");
    template.add("two", "two");
    template.add("three", "three");
    template.add("four", "four");

    expect(template.build()).toMatchSnapshot();
  });

  test("it should render collapsed with 4 or more params and collapsed option", () => {
    const template = new MediaWikiTemplate("test", { collapsed: true });
    template.add("one", "one");
    template.add("two", "two");
    template.add("three", "three");
    template.add("four", "four");

    expect(template.build()).toMatchSnapshot();
  });
});
