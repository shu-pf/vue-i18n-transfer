import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import pickUpValues from "./pickup";
import arrayToJson from "./arrayToJson";
import transferText from "./transfer";

// aceエディタの初期設定
/* @ts-ignore */
let before = ace.edit("before");
before.setTheme("ace/theme/monokai");
before.session.setMode("ace/mode/html");

/* @ts-ignore */
let json = ace.edit("json");
json.setTheme("ace/theme/monokai");
json.session.setMode("ace/mode/json");

/* @ts-ignore */
let after = ace.edit("after");
after.setTheme("ace/theme/monokai");
after.session.setMode("ace/mode/html");

let pickUp = document.getElementById("pickUp");
pickUp.addEventListener("click", function () {
  let beforeText = before.getSession().getValue();
  const values = pickUpValues(beforeText);
  // arrayから(stringsの)json形式に変える
  const text = arrayToJson(values);
  // 表示
  json.getSession().setValue(text);
});

let transfer = document.getElementById("transfer");
transfer.addEventListener("click", function () {
  let result = transferText(
    before.getSession().getValue(),
    json.getSession().getValue()
  );
  // jsonから連想配列に変える
  // 配列を文字数長い順に入れ替え
  // 配列から長い順に.Vueを変換する
  // 出力
  after.getSession().setValue(result);
});
