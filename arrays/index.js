var longestDiverseString = function (a, b, c) {
  let result = [];

  let arr = [
    ["a", a],
    ["b", b],
    ["c", c],
  ];

  while (true) {
    // sort by remaining count (descending)
    arr.sort((x, y) => y[1] - x[1]);

    let added = false;

    for (let i = 0; i < 3; i++) {
      let [ch, count] = arr[i];

      if (count === 0) continue;

      let n = result.length;

      // check last 2 chars
      if (n >= 2 && result[n - 1] === ch && result[n - 2] === ch) {
        continue;
      }

      // use this character
      result.push(ch);
      arr[i][1]--;
      added = true;
      break;
    }

    if (!added) break;
  }

  return result.join("");
};
