import { MediaWikiFile } from "./MediaWikiFile";
import { MediaWikiExternalLink } from "../MediaWikiExternalLink";
import { MediaWikiText } from "../MediaWikiText";

describe("MediaWikiFile", () => {
  test("caption with MediaWikiText", () => {
    expect(
      new MediaWikiFile("test.png", {
        caption: new MediaWikiText("caption", { italics: true }),
      }).build()
    ).toMatchSnapshot();
  });

  test("caption with MediaWikiContent array", () => {
    expect(
      new MediaWikiFile("test.png", {
        caption: [
          new MediaWikiText("caption ", { italics: true }),
          new MediaWikiExternalLink("link", "https://test.com"),
          new MediaWikiText(" test", { italics: true }),
        ],
      }).build()
    ).toMatchSnapshot();
  });
});
