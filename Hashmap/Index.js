/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let target = nums.length - k;

  const quickSelect = (left, right) => {
    let pivot = nums[right];

    let p = left;

    // partition
    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]];

        p++;
      }
    }

    [nums[p], nums[right]] = [nums[right], nums[p]];

    // found answer
    if (p === target) {
      return nums[p];
    }

    // search right
    if (p < target) {
      return quickSelect(p + 1, right);
    }

    // search left
    return quickSelect(left, p - 1);
  };

  return quickSelect(0, nums.length - 1);
};

let nums = [3, 2, 1, 5, 6, 4];
let k = 2;

console.log(findKthLargest(nums, k));
