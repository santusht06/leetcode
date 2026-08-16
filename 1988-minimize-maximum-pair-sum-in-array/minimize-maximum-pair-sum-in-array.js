var minPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  let maxSum = 0;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let currentSum = nums[left] + nums[right];

    maxSum = Math.max(currentSum, maxSum);

    left++;
    right--;
  }

  return maxSum;
};

nums = [3, 5, 4, 2, 4, 6];

console.log(minPairSum(nums));
