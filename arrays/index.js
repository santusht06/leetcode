/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
  let set = new Set(nums);

  for (let i = 0; i < moveFrom.length; i++) {
    set.delete(moveFrom[i]); // remove old position
    set.add(moveTo[i]); // add new position
  }

  return Array.from(set).sort((a, b) => a - b);
};
