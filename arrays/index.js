/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  let count = [0, 0, 0];

  for (let s of stones) {
    count[s % 3]++;
  }

  let c0 = count[0];
  let c1 = count[1];
  let c2 = count[2];

  if (c0 % 2 === 0) {
    return c1 > 0 && c2 > 0;
  } else {
    return Math.abs(c1 - c2) > 2;
  }
};
