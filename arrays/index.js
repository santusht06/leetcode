var numberOfArrays = function (s, k) {
  const MOD = 1e9 + 7;
  let n = s.length;

  let memo = new Array(n).fill(-1);

  function dfs(i) {
    if (i === n) return 1;
    if (s[i] === "0") return 0; // no leading zero
    if (memo[i] !== -1) return memo[i];

    let num = 0;
    let ways = 0;

    for (let j = i; j < n; j++) {
      num = num * 10 + (s[j] - "0");

      if (num > k) break;

      ways = (ways + dfs(j + 1)) % MOD;
    }

    return (memo[i] = ways);
  }

  return dfs(0);
};
