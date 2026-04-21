/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === "0") return 0;

  let n = s.length;
  let dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    let one = parseInt(s.slice(i - 1, i));
    let two = parseInt(s.slice(i - 2, i));

    // single digit
    if (one >= 1) {
      dp[i] += dp[i - 1];
    }

    // two digit
    if (two >= 10 && two <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};
