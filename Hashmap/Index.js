/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  let set = new Set(nums);

  while (set.has(original)) {
    original = original * 2;
  }

  return original;
};
