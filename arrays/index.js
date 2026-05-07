/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function (nums, target) {
  let set = new Set();
  set.add(0);

  let prefixSum = 0;
  let count = 0;

  for (let num of nums) {
    prefixSum += num;

    // Found a subarray with sum = target
    if (set.has(prefixSum - target)) {
      count++;

      // Reset for non-overlapping subarrays
      set.clear();
      set.add(0);

      prefixSum = 0;
    } else {
      set.add(prefixSum);
    }
  }

  return count;
};
