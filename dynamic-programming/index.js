/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  let memo = new Map();

  const dfs = (a, b) => {
    let key = a + "#" + b;
    if (memo.has(key)) return memo.get(key);

    if (a === b) return true;

    // pruning: if char counts differ → false
    let sortedA = a.split("").sort().join("");
    let sortedB = b.split("").sort().join("");
    if (sortedA !== sortedB) {
      memo.set(key, false);
      return false;
    }

    let n = a.length;

    for (let i = 1; i < n; i++) {
      // case 1: no swap
      if (dfs(a.slice(0, i), b.slice(0, i)) && dfs(a.slice(i), b.slice(i))) {
        memo.set(key, true);
        return true;
      }

      // case 2: swap
      if (
        dfs(a.slice(0, i), b.slice(n - i)) &&
        dfs(a.slice(i), b.slice(0, n - i))
      ) {
        memo.set(key, true);
        return true;
      }
    }

    memo.set(key, false);
    return false;
  };

  return dfs(s1, s2);
};
