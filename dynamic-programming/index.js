var splitArray = function (nums) {
  const n = nums.length;

  // Step 1: Sieve to find primes
  let isPrime = new Array(n).fill(true);
  isPrime[0] = false;
  if (n > 1) isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Step 2: Split sums
  let sumA = 0,
    sumB = 0;

  for (let i = 0; i < n; i++) {
    if (isPrime[i]) {
      sumA += nums[i];
    } else {
      sumB += nums[i];
    }
  }

  return Math.abs(sumA - sumB);
};
