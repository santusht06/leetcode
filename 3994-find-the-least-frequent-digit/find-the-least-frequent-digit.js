/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function (n) {
  const freq = Array(10).fill(0);

  for (const digit of String(n)) {
    freq[digit]++;
  }

  const minFreq = Math.min(...freq.filter((f) => f > 0));

  for (let i = 0; i < 10; i++) {
    if (freq[i] === minFreq) return i;
  }
};

n = 1553322;

console.log(getLeastFrequentDigit(n));
