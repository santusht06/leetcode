var numOfStrings = function (patterns, word) {
  let answer = 0;

  patterns.forEach((ch) => {
    if (word.includes(ch)) answer++;
  });

  return answer;
};
((patterns = ["a", "abc", "bc", "d"]), (word = "abc"));

console.log(numOfStrings(patterns, word));
