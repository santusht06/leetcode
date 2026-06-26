/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  const isPowerOfTwoMath = (num) => num > 0 && Number.isInteger(Math.log2(num));

  return isPowerOfTwoMath(n);
}

n = 9;

console.log(isPowerOfTwo(n));
