function pickUpValues(text: string): Array<string> {
  // 改行とインデントを無視
  text = text.replace(/[\n\r][\t\s]*/g, "");

  let script_index = text.indexOf("<script");
  let html_text = text.slice(0, script_index);
  let script_text = text.slice(script_index, text.length);

  let values_from_HTML = pickUpValuesFromHTML(html_text);
  let values_from_script = pickUpValuesFromScript(script_text);
  let values = values_from_HTML.concat(values_from_script);

  // 重複を削除
  const new_values = Array.from(new Set(values));

  return new_values;
}

function pickUpValuesFromHTML(text: string): Array<string> {
  // >任意の文字<にマッチする文字列を抽出(>{{}}<は抜き出さない)
  const regex = RegExp(
    "((?!>{{)>[^<]+<)|('[^']*([\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD87F][\uDC00-\uDFFF]|[ぁ-んァ-ヶ])+[^']*')",
    "g"
  );
  let values = [];
  values = text.match(regex);

  // 前後の><の部分を消去
  if (values != null) {
    values = values.map(function (value) {
      return value.slice(1, -1);
    });
  }

  return values;
}

function pickUpValuesFromScript(text: string): Array<string> {
  // >任意の文字<にマッチする文字列を抽出(>{{}}<は抜き出さない)
  const regex = RegExp(
    "'[^']*([\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD87F][\uDC00-\uDFFF]|[ぁ-んァ-ヶ])+[^']*'",
    "g"
  );
  let values = text.match(regex);

  // 前後の><の部分を消去
  if (values != null) {
    values = values.map(function (value) {
      return value.slice(1, -1);
    });
  }

  return values;
}

export default pickUpValues;
