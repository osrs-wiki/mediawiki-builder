import { MediaWikiTable } from "../table";
import { MediaWikiText } from "../text";

describe("MediaWikiTable", () => {
  test("it should build correctly with no options, not minimal", () => {
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

  test("it should build correctly with no options, minimal", () => {
    const table = new MediaWikiTable({
      rows: [
        {
          header: true,
          minimal: true,
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
          minimal: true,
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
          minimal: true,
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

  test("it should build correctly with row options", () => {
    const table = new MediaWikiTable({
      rows: [
        {
          header: true,
          options: {
            style: "width: 15em",
          },
          cells: [
            {
              content: [new MediaWikiText("header")],
            },
          ],
        },
        {
          options: {
            style: "width: 15em",
          },
          cells: [
            {
              content: [new MediaWikiText("value")],
            },
          ],
        },
      ],
    });
    expect(table.build()).toMatchSnapshot();
  });

  test("it should build correctly with cell options", () => {
    const table = new MediaWikiTable({
      rows: [
        {
          header: true,
          options: {
            style: "width: 15em",
          },
          cells: [
            {
              content: [new MediaWikiText("header")],
              options: {
                colspan: 2,
              },
            },
          ],
        },
        {
          options: {
            style: "width: 15em",
          },
          cells: [
            {
              content: [new MediaWikiText("value")],
              options: {
                style: "text-align: center;",
              },
            },
          ],
        },
      ],
    });
    expect(table.build()).toMatchSnapshot();
  });

  test("it should build correctly with cell options, minimal", () => {
    const table = new MediaWikiTable({
      rows: [
        {
          header: true,
          minimal: true,
          cells: [
            {
              content: [new MediaWikiText("test1")],
            },
            {
              content: [new MediaWikiText("test2")],
              options: {
                style: "text-align: center;",
              },
            },
          ],
        },
        {
          minimal: true,
          cells: [
            {
              content: [
                new MediaWikiText("test1", { bold: true }),
                new MediaWikiText(" table1"),
              ],
              options: {
                style: "text-align: center;",
              },
            },
            {
              content: [
                new MediaWikiText("test2", { bold: true }),
                new MediaWikiText(" table2"),
              ],
              options: {
                colspan: 2,
              },
            },
          ],
        },
        {
          minimal: true,
          cells: [
            {
              content: [
                new MediaWikiText("test3", { italics: true }),
                new MediaWikiText(" table3"),
              ],
              options: {
                colspan: 2,
              },
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
});
