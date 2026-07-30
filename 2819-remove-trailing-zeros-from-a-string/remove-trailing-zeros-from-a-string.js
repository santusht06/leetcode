/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  num = num.split("");
  let n = num.length - 1;

  for (let i = n; i >= 0; i--) {
    if (num[i] === "0") {
      num.pop();
    } else break;
  }

  return num.join("");
};

num = "123";

console.log(removeTrailingZeros(num));
