var findDuplicate = function (nums) {
  duplicates = nums.filter((items, index) => nums.indexOf(items) !== index);

  return parseInt(duplicates[0]);
};

nums = [3, 3, 3, 3, 3];

console.log(findDuplicate(nums));
