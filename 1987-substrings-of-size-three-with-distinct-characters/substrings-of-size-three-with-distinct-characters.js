/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  s = s.split("");

  let windows = getSlidingWindows(s);

  let count = 0;

  windows.forEach((element) => {
    if (countFreq(element)) {
      count++;
    }
  });

  return count;
};

function getSlidingWindows(arr) {
  const size = 3;

  const windows = arr.map((_, i) => arr.slice(i, i + size)).slice(0, -size + 1);

  return windows;
}

function countFreq(arr) {
  let set = new Set(arr);

  if (set.size == 3) return true;
  else return false;
}

s = "aababcabc";

console.log(countGoodSubstrings(s));
