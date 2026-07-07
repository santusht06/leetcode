/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
  let str = String(n).split("");

  let filter = str.filter((ele) => ele != 0);

  let number = Number(filter.join(""));

  let x = filter.map(Number).reduce((acc, curr) => acc + curr, 0);

  return x * number;
};

n = 10203004;

console.log(sumAndMultiply(n));
