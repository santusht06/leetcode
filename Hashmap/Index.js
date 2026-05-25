/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let left = Math.max(...nums);
  let right = nums.reduce((a, b) => a + b, 0);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    let pieces = 1;
    let sum = 0;

    for (let num of nums) {
      // need new subarray
      if (sum + num > mid) {
        pieces++;
        sum = num;
      } else {
        sum += num;
      }
    }

    // too many pieces -> increase limit
    if (pieces > k) {
      left = mid + 1;
    }
    // valid -> try smaller answer
    else {
      right = mid;
    }
  }

  return left;
};
