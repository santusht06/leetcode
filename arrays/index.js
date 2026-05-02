var numSmallerByFrequency = function (queries, words) {
  function f(s) {
    let minChar = "z";
    let count = 0;

    for (let ch of s) {
      if (ch < minChar) {
        minChar = ch;
        count = 1;
      } else if (ch === minChar) {
        count++;
      }
    }

    return count;
  }

  let freqWords = words.map(f).sort((a, b) => a - b);

  function upperBound(arr, target) {
    let left = 0,
      right = arr.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] <= target) left = mid + 1;
      else right = mid;
    }

    return left;
  }

  let result = [];

  for (let q of queries) {
    let fq = f(q);
    let idx = upperBound(freqWords, fq);

    result.push(freqWords.length - idx);
  }

  return result;
};
