function arrayToJson(values: Array<string>): string {
  let text = "{\n";

  values.forEach(function (val, index) {
    if (index == values.length - 1) {
      text += '  "":"' + val + '"\n';
    } else {
      text += '  "":"' + val + '",\n';
    }
  });

  text += "}";
  return text;
}

export default arrayToJson;
