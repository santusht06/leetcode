/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var partitionArray = function(nums, k) {
    if (nums.length % k !== 0) return false;

    const groups = nums.length / k;
    const freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);

        if (freq.get(num) > groups) {
            return false;
        }
    }

    return true;
};