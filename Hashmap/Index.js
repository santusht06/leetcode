/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0,
    cows = 0;
  let count = new Array(10).fill(0);

  for (let i = 0; i < secret.length; i++) {
    let s = secret[i];
    let g = guess[i];

    if (s === g) {
      bulls++;
    } else {
      // if previously seen in guess → cow
      if (count[s] < 0) cows++;

      // if previously seen in secret → cow
      if (count[g] > 0) cows++;

      count[s]++;
      count[g]--;
    }
  }

  return `${bulls}A${cows}B`;
};
