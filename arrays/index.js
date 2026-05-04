var findTheString = function (lcp) {
  const n = lcp.length;
  const res = new Array(n).fill("");

  let charCode = "a".charCodeAt(0);

  // Phase 1: Assign characters
  for (let i = 0; i < n; i++) {
    if (res[i] !== "") continue;

    if (charCode > "z".charCodeAt(0)) return "";

    const ch = String.fromCharCode(charCode++);

    for (let j = i; j < n; j++) {
      if (lcp[i][j] > 0) {
        res[j] = ch;
      }
    }
  }

  const word = res.join("");

  // Phase 2: Validate using DP
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (word[i] === word[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = 0;
      }

      if (dp[i][j] !== lcp[i][j]) return "";
    }
  }

  return word;
};
