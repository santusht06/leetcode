/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  let split = text.split(" ");

  let third = [];

  for (let i = 0; i < split.length - 2; i++) {
    if (split[i] === first && split[i + 1] === second) {
      console.log(i + 2);
      third.push(split[i + 2]);
    }
  }
  return third;
};

text =
  "ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk";
first = "lnlqhmaohv";
second = "ypkk";

console.log(findOcurrences(text, first, second));
