function transferText(text: string, json: string): string {
  // オブジェクトにjsonをParse
  const obj = JSON.parse(json);

  // 連想配列にオブジェクトを入れ替え
  let arr = Object.keys(obj).map((e) => ({ key: e, value: obj[e] }));
  // 文章が長い順に入れ替え
  arr.sort(function (a, b) {
    if (a.value.length < b.value.length) return 1;
    if (a.value.length > b.value.length) return -1;
    return 0;
  });

  arr.forEach(function (obj) {
    text = replace_all(text, obj.value, obj.key);
  });

  return text;
}

// 検索文字列を全て置換する
// https://marycore.jp/prog/js/replace-all/
function replace_all(string: string, target: string, replacement: string) {
  var result = "";
  var offset = 0;
  var target_length = target.length;
  if (target_length === 0) {
    for (var i = 0, c = string.length; i < c; i++) {
      result += string[i];
      result += replacement;
    }
    if (result.length)
      return result.substr(0, result.length - replacement.length);
    return result;
  }
  do {
    var i = string.indexOf(target, offset);
    if (i === -1) {
      result += string.substring(offset);
      return result;
    }
    result += string.substring(offset, i);
    result += replacement;
    offset = i + target_length;
  } while (true);
}

export default transferText;
