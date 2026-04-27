/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
  let freq = new Map();

  // normalize remainder (handle negative)
  for (let num of nums) {
    let r = ((num % value) + value) % value;
    freq.set(r, (freq.get(r) || 0) + 1);
  }

  let i = 0;

  while (true) {
    let r = i % value;

    if ((freq.get(r) || 0) > 0) {
      freq.set(r, freq.get(r) - 1);
    } else {
      return i;
    }

    i++;
  }
};
