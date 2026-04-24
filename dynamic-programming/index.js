/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function (word1, word2) {
  let res = "";

  while (word1.length && word2.length) {
    if (word1 > word2) {
      res += word1[0];
      word1 = word1.slice(1);
    } else {
      res += word2[0];
      word2 = word2.slice(1);
    }
  }

  return res + word1 + word2;
};
