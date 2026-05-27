/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  let lowerLast = new Map();
  let upperFirst = new Map();

  // store positions
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];

    // lowercase
    if (ch >= "a" && ch <= "z") {
      lowerLast.set(ch, i);
    }

    // uppercase
    else {
      let lower = ch.toLowerCase();

      // first uppercase only
      if (!upperFirst.has(lower)) {
        upperFirst.set(lower, i);
      }
    }
  }

  let count = 0;

  // compare positions
  for (let [ch, idx] of lowerLast) {
    if (upperFirst.has(ch) && idx < upperFirst.get(ch)) {
      count++;
    }
  }

  return count;
};

console.log(numberOfSpecialChars("aaAbcBC"));
