/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromic = function (s) {
  let hold = s.split("");

  let total = "";

  hold.map((el) => {
    total += el.charCodeAt().toString(2).padStart(8, "0");
  });

  return total === total.split("").reverse().join("");
};

s = "leet";

console.log(isPalindromic(s));
