/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  for (let base = 2; base <= n - 2; base++) {
    const str = n.toString(base);

    if (str !== str.split("").reverse().join("")) {
      return false;
    }
  }

  return true;
};

let n = 9;
console.log(isStrictlyPalindromic(n));
