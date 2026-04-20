/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function (startWords, targetWords) {
  const getMask = (word) => {
    let mask = 0;
    for (let ch of word) {
      mask |= 1 << (ch.charCodeAt(0) - 97);
    }
    return mask;
  };

  let set = new Set();

  // store all startWords masks
  for (let word of startWords) {
    set.add(getMask(word));
  }

  let count = 0;

  for (let word of targetWords) {
    let mask = getMask(word);

    // try removing each character
    for (let ch of word) {
      let newMask = mask & ~(1 << (ch.charCodeAt(0) - 97));

      if (set.has(newMask)) {
        count++;
        break;
      }
    }
  }

  return count;
};
