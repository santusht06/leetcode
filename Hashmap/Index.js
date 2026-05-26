/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);

    n = String(n)
      .split("")
      .map(Number)
      .reduce((sum, digit) => sum + digit * digit, 0);
  }

  return n === 1;
};

let n = 19;

console.log(isHappy(n));
