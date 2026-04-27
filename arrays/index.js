/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
  let n = nums.length;

  let pos1 = nums.indexOf(1);
  let posN = nums.indexOf(n);

  let moves = pos1 + (n - 1 - posN);

  if (pos1 > posN) {
    moves -= 1;
  }

  return moves;
};
