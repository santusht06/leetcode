/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  return arr.indexOf(Math.max(...arr));
};

arr = [0, 1, 0];

console.log(peakIndexInMountainArray(arr));
