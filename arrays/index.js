var entityParser = function (text) {
  const map = {
    "&quot;": '"',
    "&apos;": "'",
    "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&frasl;": "/",
  };

  let result = "";
  let i = 0;

  while (i < text.length) {
    if (text[i] === "&") {
      let found = false;

      // max entity length is 7 ("&frasl;")
      for (let j = i; j < Math.min(i + 7, text.length); j++) {
        let substr = text.slice(i, j + 1);

        if (map[substr]) {
          result += map[substr];
          i = j + 1;
          found = true;
          break;
        }
      }

      if (!found) {
        result += text[i];
        i++;
      }
    } else {
      result += text[i];
      i++;
    }
  }

  return result;
};
