import { MediaWikiTable } from "../table";
import { MediaWikiText } from "../text";

describe("MediaWikiTable", () => {
  test("it should build correctly with no options", () => {
    const table = new MediaWikiTable({
      rows: [
        {
          header: true,
          cells: [
            {
              content: [new MediaWikiText("test1")],
            },
            {
              content: [new MediaWikiText("test2")],
            },
          ],
        },
        {
          cells: [
            {
              content: [
                new MediaWikiText("test1", { bold: true }),
                new MediaWikiText(" table1"),
              ],
            },
            {
              content: [
                new MediaWikiText("test2", { bold: true }),
                new MediaWikiText(" table2"),
              ],
            },
          ],
        },
        {
          cells: [
            {
              content: [
                new MediaWikiText("test3", { italics: true }),
                new MediaWikiText(" table3"),
              ],
            },
            {
              content: [
                new MediaWikiText("test4\n"),
                new MediaWikiText(" table4"),
              ],
            },
          ],
        },
      ],
    });
    expect(table.build()).toMatchSnapshot();
  });

  test("it should build correctly with table options", () => {
    const table = new MediaWikiTable({
      rows: [
        {
          header: true,
          cells: [
            {
              content: [new MediaWikiText("header")],
            },
          ],
        },
        {
          cells: [
            {
              content: [new MediaWikiText("value")],
            },
          ],
        },
      ],
      options: {
        class: "wikitable",
      },
    });
    expect(table.build()).toMatchSnapshot();
  });
});
