/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const counts = new Set();

  for (const n of nums) {
    if (counts.has(n)) return n;
    console.log(counts.add(n));
  }
};

nums = [1, 2, 3, 3];

console.log(repeatedNTimes(nums));
