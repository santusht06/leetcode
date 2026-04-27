/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let count = new Map();
  let first = new Map();
  let last = new Map();

  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];

    if (!first.has(x)) first.set(x, i);
    last.set(x, i);

    count.set(x, (count.get(x) || 0) + 1);
  }

  // find degree
  let degree = 0;
  for (let v of count.values()) {
    degree = Math.max(degree, v);
  }

  // find minimum length
  let ans = Infinity;
  for (let [num, freq] of count.entries()) {
    if (freq === degree) {
      let len = last.get(num) - first.get(num) + 1;
      ans = Math.min(ans, len);
    }
  }

  return ans;
};
