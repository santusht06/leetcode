/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const boundary = Math.sqrt(num);
  for (let i = 3; i <= boundary; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

n = 10;

console.log(countPrimes(n));
