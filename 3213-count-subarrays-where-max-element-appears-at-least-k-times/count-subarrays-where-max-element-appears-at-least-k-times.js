var countSubarrays = function (nums, k) {
  let max = Math.max(...nums);

  let left = 0;
  let freq = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === max) {
      freq++;
    }

    while (freq >= k) {
      if (nums[left] === max) {
        freq--;
      }

      left++;
    }

    count += left;
  }

  return count;
};