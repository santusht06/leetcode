/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    if (nums.length < 3) return -1;

    const a = nums[0];
    const b = nums[1];
    const c = nums[2];

    return a + b + c - Math.max(a, b, c) - Math.min(a, b, c);
};