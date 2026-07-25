/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const firstIndex = new Map();
  let maxLen = -1;

  for (let i = 0; i < s.length; i++) {
    if (!firstIndex.has(s[i])) {
      firstIndex.set(s[i], i);
    } else {
      maxLen = Math.max(maxLen, i - firstIndex.get(s[i]) - 1);
    }
  }

  return maxLen;
};
