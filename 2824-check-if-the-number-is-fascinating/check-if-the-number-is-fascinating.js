/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  if (n <= 100) return false;
  let combinedSTR = `${n}${n * 2}${n * 3}`;

  return combinedSTR.split("").sort().join("") === "123456789";
};

n = 100;

console.log(isFascinating(n));
