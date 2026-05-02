var getHappyString = function (n, k) {
  let result = "";
  let count = 0;

  function dfs(curr) {
    if (curr.length === n) {
      count++;
      if (count === k) {
        result = curr;
        return true; // stop further recursion
      }
      return false;
    }

    for (let ch of ["a", "b", "c"]) {
      if (curr.length > 0 && curr[curr.length - 1] === ch) continue;

      if (dfs(curr + ch)) return true;
    }

    return false;
  }

  dfs("");
  return result;
};
