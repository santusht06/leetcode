/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
  let ans = 0;

  for (const num of nums) {
    const divisors = getAllDivisors(num);

    if (divisors.length === 4) {
      ans += divisors.reduce((sum, d) => sum + d, 0);
    }
  }

  return ans;
};

function getAllDivisors(num) {
  const divisors = [];

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);

      if (i !== num / i) {
        divisors.push(num / i);
      }
    }
  }

  return divisors;
}
