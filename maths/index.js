var isPowerOfFour = function (n) {
  n = n > 0 && Number.isInteger(Math.log(n) / Math.log(4));
  return n;
};

n = 5;

console.log(isPowerOfFour(n));
