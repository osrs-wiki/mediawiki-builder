import { MediaWikiDate } from "./MediaWikiDate";

describe("MediaWikiDate", () => {
  it("should render the day", () => {
    expect(new MediaWikiDate(new Date(2024, 1, 1), { day: true }).build()).toBe(
      "[[1]]"
    );
  });

  it("should render the month", () => {
    expect(
      new MediaWikiDate(new Date(2024, 0, 1), { month: true }).build()
    ).toBe("[[January]]");
  });

  it("should render the year", () => {
    expect(
      new MediaWikiDate(new Date(2024, 0, 1), { year: true }).build()
    ).toBe("[[2024]]");
  });

  it("should render the day and month", () => {
    expect(
      new MediaWikiDate(new Date(2024, 0, 1), {
        day: true,
        month: true,
      }).build()
    ).toBe("[[1 January]]");
  });

  it("should render the month and year", () => {
    expect(
      new MediaWikiDate(new Date(2024, 0, 1), {
        month: true,
        year: true,
      }).build()
    ).toBe("[[January]] [[2024]]");
  });
});
