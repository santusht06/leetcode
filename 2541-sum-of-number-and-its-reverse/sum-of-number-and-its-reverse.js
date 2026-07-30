/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function (num) {
  let forward = 0;

  while (true) {
    let reverse = String(forward).split("").reverse().join("");

    reverse = Number(reverse);
    if (forward + reverse == num) {
      return true;
    } else {
      forward++;
    }
    if (forward > num) {
      return false;
      break;
    }
  }
};

num = 63;

console.log(sumOfNumberAndReverse(num));
