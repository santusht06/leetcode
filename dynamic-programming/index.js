/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];

  const isPalindrome = (str, l, r) => {
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  const backtrack = (start, path) => {
    if (start === s.length) {
      res.push([...path]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        path.push(s.substring(start, end + 1));
        backtrack(end + 1, path);
        path.pop(); // backtrack
      }
    }
  };

  backtrack(0, []);
  return res;
};
