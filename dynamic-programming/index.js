/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  let m = s1.length,
    n = s2.length;

  if (m + n !== s3.length) return false;

  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  dp[0][0] = true;

  // first row
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  // first column
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let k = i + j - 1;

      if (s1[i - 1] === s3[k]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j];
      }

      if (s2[j - 1] === s3[k]) {
        dp[i][j] = dp[i][j] || dp[i][j - 1];
      }
    }
  }

  return dp[m][n];
};
