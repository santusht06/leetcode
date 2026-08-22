var lastVisitedIntegers = function (nums) {
  let seen = [];
  let ans = [];
  let k = 0;

  for (let num of nums) {
    if (num > 0) {
      seen.push(num);
      k = 0;
    } else {
      if (k >= seen.length) {
        ans.push(-1);
      } else {
        ans.push(seen[seen.length - 1 - k]);
      }

      k++;
    }
  }

  return ans;
};

let nums = [1, 2, -1, -1, -1];

console.log(lastVisitedIntegers(nums));
