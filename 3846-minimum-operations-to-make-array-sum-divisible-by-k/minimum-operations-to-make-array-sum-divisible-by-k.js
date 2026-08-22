/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let sum = nums.reduce((acc, curr) => acc + curr, 0);

  return sum % k;
};

((nums = [3, 2]), (k = 6));
console.log(minOperations(nums, k));
