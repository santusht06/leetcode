/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let ans = nums1.filter((item) => nums2.includes(item));
  return ans;
};

((nums1 = [1, 2, 2, 1]), (nums2 = [2]));

console.log(intersect(nums1, nums2));
