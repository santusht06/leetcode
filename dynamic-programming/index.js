/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  let need = new Map();
  for (let ch of t) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  let window = new Map();
  let have = 0;
  let required = need.size;

  let left = 0;
  let minLen = Infinity;
  let res = [-1, -1];

  for (let right = 0; right < s.length; right++) {
    let ch = s[right];
    window.set(ch, (window.get(ch) || 0) + 1);

    // matched condition
    if (need.has(ch) && window.get(ch) === need.get(ch)) {
      have++;
    }

    // shrink window
    while (have === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        res = [left, right];
      }

      let leftChar = s[left];
      window.set(leftChar, window.get(leftChar) - 1);

      if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
        have--;
      }

      left++;
    }
  }

  return minLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
};
