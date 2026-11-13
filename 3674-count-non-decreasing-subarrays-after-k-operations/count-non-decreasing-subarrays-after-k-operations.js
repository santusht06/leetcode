/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countNonDecreasingSubarrays = function(nums, k) {
  let ans = 0;
  let cost = 0;
  const dq = [];
  let head = 0;

  for (let i = nums.length - 1, j = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    let count = 1;

    while (dq.length > head && dq[dq.length - 1][0] < num) {
      const [nextNum, nextCount] = dq.pop();
      count += nextCount;
      cost += (num - nextNum) * nextCount;
    }
    dq.push([num, count]);

    while (cost > k) {
      const rightmostNum = dq[head][0];
      cost -= (rightmostNum - nums[j]);
      j--;
      if (dq[head][1] > 1) {
        dq[head][1]--;
      } else {
        head++;
      }
    }

    ans += (j - i + 1);
  }

  return ans;
};
