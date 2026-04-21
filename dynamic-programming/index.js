/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return [];

  let graph = new Map();
  let level = new Map();
  let queue = [beginWord];

  level.set(beginWord, 0);

  // BFS
  while (queue.length) {
    let word = queue.shift();
    let currLevel = level.get(word);

    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        let next =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);

        if (wordSet.has(next)) {
          if (!level.has(next)) {
            level.set(next, currLevel + 1);
            queue.push(next);
          }

          // only connect shortest path edges
          if (level.get(next) === currLevel + 1) {
            if (!graph.has(word)) graph.set(word, []);
            graph.get(word).push(next);
          }
        }
      }
    }
  }

  let res = [];

  // DFS to build paths
  const dfs = (word, path) => {
    if (word === endWord) {
      res.push([...path]);
      return;
    }

    if (!graph.has(word)) return;

    for (let next of graph.get(word)) {
      path.push(next);
      dfs(next, path);
      path.pop();
    }
  };

  dfs(beginWord, [beginWord]);

  return res;
};
