var findNonMinOrMax = function (nums) {
  if (nums.length <= 2) return -1;
  let max = Math.max(...nums);

  let min = Math.min(...nums);

  let result = [];

  nums.forEach((element) => {
    if (element != max && element != min) {
      result.push(element);
    }
  });

  return result[Math.floor(Math.random() * result.length)];
};

nums = [1, 2];

console.log(findNonMinOrMax(nums));
