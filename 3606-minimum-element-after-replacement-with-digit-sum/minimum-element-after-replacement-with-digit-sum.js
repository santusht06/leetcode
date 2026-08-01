/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  let result = [];
  nums.forEach((el) => {
    let num = String(el).split("");

    result.push(num.reduce((acc, curr) => Number(acc) + Number(curr), 0));
  });

  return Math.min(...result);
};

nums = [10, 12, 13, 14];

console.log(minElement(nums));
