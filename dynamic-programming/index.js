/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */
var leastOpsExpressTarget = function (x, target) {
  let memo = new Map();

  const dfs = (t) => {
    if (memo.has(t)) return memo.get(t);

    // base case
    if (t < x) {
      return Math.min(t * 2 - 1, (x - t) * 2);
    }

    let k = Math.floor(Math.log(t) / Math.log(x));
    let p = Math.pow(x, k);

    if (t === p) {
      memo.set(t, k);
      return k;
    }

    // option 1
    let res = dfs(t - p) + k;

    // option 2 (ONLY if smaller)
    let res2 = Infinity;
    if (p * x - t < t) {
      res2 = dfs(p * x - t) + k + 1;
    }

    let ans = Math.min(res, res2) + 1;
    memo.set(t, ans);
    return ans;
  };

  return dfs(target);
};
