/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  let n = s.length;

  // Step 1: palindrome table
  let isPal = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j] && (j - i <= 2 || isPal[i + 1][j - 1])) {
        isPal[i][j] = true;
      }
    }
  }

  // Step 2: DP for min cuts
  let dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (isPal[0][i]) {
      dp[i] = 0;
    } else {
      dp[i] = Infinity;

      for (let j = 0; j < i; j++) {
        if (isPal[j + 1][i]) {
          dp[i] = Math.min(dp[i], dp[j] + 1);
        }
      }
    }
  }

  return dp[n - 1];
};
