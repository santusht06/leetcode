var countPrimes = function (n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result.length;
};

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

n = 10;

console.log(countPrimes(n));
