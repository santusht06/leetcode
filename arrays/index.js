/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  nums.sort((a, b) => a - b);

  let count = 0;
  let freq = new Map();

  const dfs = (i) => {
    if (i === nums.length) {
      count++;
      return;
    }

    // ❌ skip
    dfs(i + 1);

    let num = nums[i];

    // ✅ pick (only if valid)
    if (!freq.has(num - k)) {
      freq.set(num, (freq.get(num) || 0) + 1);

      dfs(i + 1);

      // backtrack
      freq.set(num, freq.get(num) - 1);
      if (freq.get(num) === 0) freq.delete(num);
    }
  };

  dfs(0);

  return count - 1; // remove empty subset
};
