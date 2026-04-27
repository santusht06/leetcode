/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
  let n = nums.length;
  let maxLen = -1;

  for (let i = 0; i < n - 1; i++) {
    // must start with +1
    if (nums[i + 1] !== nums[i] + 1) continue;

    let len = 2;
    let expectedDiff = -1;

    for (let j = i + 2; j < n; j++) {
      if (nums[j] - nums[j - 1] === expectedDiff) {
        len++;
        expectedDiff *= -1; // flip between +1 and -1
      } else {
        break;
      }
    }

    maxLen = Math.max(maxLen, len);
  }

  return maxLen;
};
