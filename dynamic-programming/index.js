var maxGCDScore = function (nums, k) {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let g = 0;

    // Map to count how many numbers match condition
    let cnt = new Map();

    for (let j = i; j < n; j++) {
      g = gcd(g, nums[j]);

      // Count elements divisible by g but not 2g
      let c = 0;
      for (let t = i; t <= j; t++) {
        if (nums[t] % g === 0 && nums[t] % (2 * g) !== 0) {
          c++;
        }
      }

      let length = j - i + 1;

      // Without doubling
      ans = Math.max(ans, length * g);

      // With doubling
      if (c <= k) {
        ans = Math.max(ans, length * g * 2);
      }
    }
  }

  return ans;

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
};
