var wordBreak = function (s, wordDict) {
  let set = new Set(wordDict);
  let memo = new Map();

  const dfs = (str) => {
    if (memo.has(str)) return memo.get(str);

    let res = [];

    if (str.length === 0) {
      res.push("");
      return res;
    }

    for (let word of set) {
      if (str.startsWith(word)) {
        let suffixWays = dfs(str.slice(word.length));

        for (let way of suffixWays) {
          res.push(word + (way === "" ? "" : " " + way));
        }
      }
    }

    memo.set(str, res);
    return res;
  };

  return dfs(s);
};
