/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let count = 0;
  while (low <= high) {
    let str = String(low);
    if (str.length % 2 != 0) {
      low++;
      continue;
    }

    let mid = str.length / 2;

    let left = 0;

    let right = 0;

    for (let i = 0; i < mid; i++) {
      left += Number(str[i]);

      right += Number(str[i + mid]);
    }

    if (left == right) {
      count++;
    }
    low++;
  }

  return count;
};

((low = 1200), (high = 1230));

console.log(countSymmetricIntegers(low, high));
