var decodeMessage = function (key, message) {
  let map = {};
  let curr = "a";

  for (let ch of key) {
    if (ch !== " " && map[ch] === undefined) {
      map[ch] = curr;
      curr = String.fromCharCode(curr.charCodeAt(0) + 1);
    }
  }

  let result = "";

  for (let ch of message) {
    if (ch === " ") {
      result += " ";
    } else {
      result += map[ch];
    }
  }

  return result;
};
