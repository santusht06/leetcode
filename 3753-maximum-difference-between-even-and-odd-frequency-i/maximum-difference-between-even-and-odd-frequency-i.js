/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  const map = new Map();

  for (const ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  let maxOdd = -Infinity;
  let minEven = Infinity;

  for (const freq of map.values()) {
    if (freq % 2 === 0) {
      minEven = Math.min(minEven, freq);
    } else {
      maxOdd = Math.max(maxOdd, freq);
    }
  }

  return maxOdd - minEven;
};

const s = "aaaaabbc";
console.log(maxDifference(s));
