var reverseWords = function (s) {
  let words = s.split(" ");

  const countVowels = (word) => {
    let count = 0;

    for (let ch of word) {
      if ("aeiou".includes(ch)) {
        count++;
      }
    }

    return count;
  };

  let target = countVowels(words[0]);

  for (let i = 1; i < words.length; i++) {
    if (countVowels(words[i]) === target) {
      words[i] = words[i].split("").reverse().join("");
    }
  }

  return words.join(" ");
};
s = "cat and mice";

console.log(reverseWords(s));
