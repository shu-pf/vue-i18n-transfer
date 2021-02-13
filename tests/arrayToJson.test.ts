import arrayToJson from "../src/arrayToJson";

describe("jsonの出力", (): void => {
  test("単一の場合", (): void => {
    const values = ["テスト"];
    const response: string = arrayToJson(values);
    expect(response).toBe('{\n  "":"テスト"\n}');
  });
  test("複数の場合", (): void => {
    const values = ["テスト", "テスト２"];
    const response: string = arrayToJson(values);
    expect(response).toBe('{\n  "":"テスト",\n  "":"テスト２"\n}');
  });
});
