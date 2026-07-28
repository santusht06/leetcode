/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let value = n;
  return function () {
    return value++;
  };
};

let counter = createCounter(10);

console.log(counter());

console.log(counter());
console.log(counter());
