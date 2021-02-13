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

  json.getSession().setValue(text);
});

let transfer = document.getElementById("transfer");
transfer.addEventListener("click", function () {
  let result = transferText(
    before.getSession().getValue(),
    json.getSession().getValue()
  );
  after.getSession().setValue(result);
});
