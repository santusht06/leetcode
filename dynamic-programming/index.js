/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length) {
    let [word, steps] = queue.shift();

    if (word === endWord) return steps;

    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        let next =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);

        if (wordSet.has(next)) {
          queue.push([next, steps + 1]);
          wordSet.delete(next); // mark visited
        }
      }
    }
  }

  return 0;
};
