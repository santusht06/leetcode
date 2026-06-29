/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const x = nums.slice(0, n);
  const y = nums.slice(n);

  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(x[i]);
    result.push(y[i]);
  }

  return result;
};

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;

console.log(shuffle(nums, n));