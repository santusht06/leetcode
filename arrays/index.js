var sortVowels = function (s) {
  let arr = s.split("");

  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // extract vowels
  let extracted = arr.filter((ch) => vowels.has(ch)).sort();

  let j = 0;

  // put back sorted vowels
  for (let i = 0; i < arr.length; i++) {
    if (vowels.has(arr[i])) {
      arr[i] = extracted[j++];
    }
  }

  return arr.join("");
};

let s = "leetcode";
console.log(sortVowels(s));
