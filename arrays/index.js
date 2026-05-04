var palindromePairs = function (words) {
  const map = new Map();

  // Step 1: store reversed words
  for (let i = 0; i < words.length; i++) {
    map.set(words[i], i);
  }

  const result = [];

  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left++] !== str[right--]) return false;
    }
    return true;
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const len = word.length;

    for (let j = 0; j <= len; j++) {
      const prefix = word.substring(0, j);
      const suffix = word.substring(j);

      // Case 1: prefix palindrome
      if (isPalindrome(word, 0, j - 1)) {
        const revSuffix = suffix.split("").reverse().join("");
        if (map.has(revSuffix) && map.get(revSuffix) !== i) {
          result.push([map.get(revSuffix), i]);
        }
      }

      // Case 2: suffix palindrome
      // j != len to avoid duplicates
      if (j !== len && isPalindrome(word, j, len - 1)) {
        const revPrefix = prefix.split("").reverse().join("");
        if (map.has(revPrefix) && map.get(revPrefix) !== i) {
          result.push([i, map.get(revPrefix)]);
        }
      }
    }
  }

  return result;
};
