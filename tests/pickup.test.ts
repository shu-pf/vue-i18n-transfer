import pickUpValues from "../src/pickup";

describe("HTMLから単語を抜き出す", (): void => {
  test("単一の場合", (): void => {
    const response: Array<string> = pickUpValues(
      '<a>test</a><script type="javascript"></script>'
    );
    expect(response[0]).toBe("test");
  });
  test("複数の場合", (): void => {
    const response: Array<string> = pickUpValues(
      '<a>test</><a>test2</><script type="javascript"></script>'
    );
    expect(response[0]).toBe("test");
    expect(response[1]).toBe("test2");
  });
  test("改行を含む場合", (): void => {
    const response: Array<string> = pickUpValues(
      '<a>\n      test</a><script type="javascript"></script>'
    );
    expect(response[0]).toBe("test");
  });
});
