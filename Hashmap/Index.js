/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let sort = [...nums].sort((a, b) => a - b);

  let count = 1;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] != sort[i]) {
      count++;
    }
  }

  return count;
};

nums = [2, 6, 4, 8, 10, 9, 15];

console.log(findUnsortedSubarray(nums));
