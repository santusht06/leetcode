/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function(nums) {
    nums.sort((a, b) => a - b);

    const smallest = nums[0];
    const largest = nums[nums.length - 1];
    const secondLargest = nums[nums.length - 2];

    return largest + secondLargest - smallest;
};