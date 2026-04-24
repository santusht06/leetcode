/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function (nums, goal) {
  let n = nums.length;
  let mid = Math.floor(n / 2);

  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  const getSums = (arr) => {
    let res = [];
    let m = arr.length;

    for (let mask = 0; mask < 1 << m; mask++) {
      let sum = 0;
      for (let i = 0; i < m; i++) {
        if (mask & (1 << i)) {
          sum += arr[i];
        }
      }
      res.push(sum);
    }

    return res;
  };

  let leftSums = getSums(left);
  let rightSums = getSums(right);

  rightSums.sort((a, b) => a - b);

  let ans = Infinity;

  for (let l of leftSums) {
    let target = goal - l;

    // binary search
    let lo = 0,
      hi = rightSums.length - 1;

    while (lo <= hi) {
      let mid = Math.floor((lo + hi) / 2);

      let sum = l + rightSums[mid];
      ans = Math.min(ans, Math.abs(sum - goal));

      if (rightSums[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }

  return ans;
};
