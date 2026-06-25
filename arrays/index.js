function Progression(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += i * nums[i];
  }
  return result;
}

function rotate(arr, k) {
  const n = nums.length;
  k %= n;

  R = [...arr.slice(n - k), ...arr.slice(0, n - k)];

  return Progression(R);
}

var maxRotateFunction = function (nums) {
  let k = 0;

  ans = null;

  for (let i = 0; i < nums.length; i++) {
    ans = Math.max(rotate(nums, k));

    k++;
  }
  return ans;
};

nums = [100];

console.log(maxRotateFunction(nums));
