/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var mergeCharacters = function (s, k) {
  let arr = s.split("");

  let i = 0;

  while (i < arr.length) {
    let found = false;

    for (let j = i + 1; j < arr.length && j - i <= k; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1); // remove right one
        found = true;
        break;
      }
    }

    if (!found) {
      i++; // move forward only if no merge
    }
  }

  return arr.join("");
};
