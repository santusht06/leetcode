/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
  let map = new Map();

  // Step 1: count frequency
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let result = [];

  // Step 2: check lonely condition
  for (let num of nums) {
    if (map.get(num) === 1 && !map.has(num - 1) && !map.has(num + 1)) {
      result.push(num);
    }
  }

  return result;
};
