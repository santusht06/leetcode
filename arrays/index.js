var minCost = function (nums, queries) {
  let n = nums.length;

  let closest = new Array(n);

  for (let i = 0; i < n; i++) {
    if (i === 0) closest[i] = 1;
    else if (i === n - 1) closest[i] = n - 2;
    else {
      let left = nums[i] - nums[i - 1];
      let right = nums[i + 1] - nums[i];
      closest[i] = left <= right ? i - 1 : i + 1;
    }
  }

  let forward = new Array(n - 1);
  let backward = new Array(n - 1);

  for (let i = 0; i < n - 1; i++) {
    let diff = nums[i + 1] - nums[i];

    forward[i] = closest[i] === i + 1 ? 1 : diff;
    backward[i] = closest[i + 1] === i ? 1 : diff;
  }

  let prefF = [0];
  for (let i = 0; i < n - 1; i++) {
    prefF.push(prefF[i] + forward[i]);
  }

  let prefB = [0];
  for (let i = 0; i < n - 1; i++) {
    prefB.push(prefB[i] + backward[i]);
  }

  let res = [];

  for (let [l, r] of queries) {
    if (l < r) {
      res.push(prefF[r] - prefF[l]);
    } else {
      res.push(prefB[l] - prefB[r]);
    }
  }

  return res;
};

((nums = [-5, -2, 3]),
  (queries = [
    [0, 2],
    [2, 0],
    [1, 2],
  ]));

console.log(minCost(nums, queries));
