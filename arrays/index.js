var majorityElement = function (nums) {
  let map = new Map();

  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  let majority = Math.floor(nums.length / 2);

  for (let [key, value] of map) {
    if (value > majority) {
      return key;
    }
  }
};

nums = [3, 2, 3];

console.log(majorityElement(nums));
