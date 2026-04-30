var countTrapezoids = function (points) {
  const MOD = 1e9 + 7;

  // Step 1: group by y
  let map = new Map();

  for (let [x, y] of points) {
    map.set(y, (map.get(y) || 0) + 1);
  }

  // Step 2: compute C(n,2)
  let ways = [];
  for (let count of map.values()) {
    if (count >= 2) {
      ways.push((count * (count - 1)) / 2);
    }
  }

  // Step 3: sum trick
  let total = 0;
  for (let w of ways) {
    total += w;
  }

  let ans = 0;
  for (let w of ways) {
    ans += w * (total - w);
  }

  return Math.floor(ans / 2) % MOD;
};
