var findNumOfValidWords = function (words, puzzles) {
  function getMask(word) {
    let mask = 0;
    for (let ch of new Set(word)) {
      mask |= 1 << (ch.charCodeAt(0) - 97);
    }
    return mask;
  }

  let freq = new Map();

  for (let word of words) {
    let mask = getMask(word);
    if (mask.toString(2).split("1").length - 1 <= 7) {
      freq.set(mask, (freq.get(mask) || 0) + 1);
    }
  }

  let result = [];

  for (let puzzle of puzzles) {
    let first = 1 << (puzzle[0].charCodeAt(0) - 97);

    let mask = 0;
    for (let ch of puzzle) {
      mask |= 1 << (ch.charCodeAt(0) - 97);
    }

    let sub = mask;
    let count = 0;

    while (sub) {
      // must include first letter
      if ((sub & first) !== 0 && freq.has(sub)) {
        count += freq.get(sub);
      }
      sub = (sub - 1) & mask;
    }

    result.push(count);
  }

  return result;
};
