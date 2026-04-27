/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  const MOD = 1e9 + 7;

  // Edge case
  if (multiplier === 1) {
    return nums.map((x) => x % MOD);
  }

  // Min heap (value, index)
  let heap = nums.map((val, i) => [val, i]);

  heap.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  // simulate limited steps
  let limit = Math.min(k, 100000); // safe cap
  for (let i = 0; i < limit; i++) {
    heap.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let [val, idx] = heap[0];
    heap[0][0] = val * multiplier;
  }

  k -= limit;

  // fast exponentiation
  const modPow = (base, exp) => {
    let res = 1n;
    let b = BigInt(base);
    let e = BigInt(exp);

    while (e > 0n) {
      if (e % 2n === 1n) res = (res * b) % BigInt(MOD);
      b = (b * b) % BigInt(MOD);
      e /= 2n;
    }

    return res;
  };

  // apply remaining k uniformly
  if (k > 0) {
    let times = Math.floor(k / nums.length);

    let mul = modPow(multiplier, times);

    for (let i = 0; i < heap.length; i++) {
      heap[i][0] = Number((BigInt(heap[i][0]) * mul) % BigInt(MOD));
    }

    k %= nums.length;

    // final small simulation
    for (let i = 0; i < k; i++) {
      heap.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
      heap[0][0] = heap[0][0] * multiplier;
    }
  }

  // rebuild result
  let res = new Array(nums.length);

  for (let [val, idx] of heap) {
    res[idx] = val % MOD;
  }

  return res;
};
