/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var mergeCharacters = function (s, k) {
  let arr = s.split("");

  while (true) {
    let merged = false;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length && j - i <= k; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1); // remove right one
          merged = true;
          break;
        }
      }
      if (merged) break;
    }

    if (!merged) break; // no more merges
  }

  return arr.join("");
};
