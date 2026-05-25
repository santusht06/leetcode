var findDuplicates = function (nums) {
  let map = new Map();
  nums = nums.sort((a, b) => a - b);

  let result = [];

  for (let words of nums) {
    map.set(words, (map.get(words) || 0) + 1);

    if (map.get(words) == 2) {
      result.push(words);
    }
  }

  return result;
};

nums = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDuplicates(nums));
