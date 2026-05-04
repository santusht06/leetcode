var divisibilityArray = function (word, m) {
  const n = word.length;
  const result = new Array(n).fill(0);

  let rem = 0;

  for (let i = 0; i < n; i++) {
    const digit = word[i] - "0";

    rem = (rem * 10 + digit) % m;

    if (rem === 0) {
      result[i] = 1;
    }
  }

  return result;
};
