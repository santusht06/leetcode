var countTrapezoids = function (points) {
  const MOD = 1000000007n;

  let map = new Map();

  // group by y
  for (let [x, y] of points) {
    map.set(y, (map.get(y) || 0n) + 1n);
  }

  let ways = [];

  // compute C(n,2) safely
  for (let count of map.values()) {
    if (count >= 2n) {
      ways.push((count * (count - 1n)) / 2n);
    }
  }

  // total sum
  let total = 0n;
  for (let w of ways) {
    total = (total + w) % MOD;
  }

  // final answer
  let ans = 0n;
  for (let w of ways) {
    ans = (ans + w * (total - w)) % MOD;
  }

  // divide by 2 (modular inverse of 2)
  ans = (ans * 500000004n) % MOD;

  return Number(ans);
};
