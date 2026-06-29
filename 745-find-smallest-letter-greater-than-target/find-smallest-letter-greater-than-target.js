/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  for (let ch of letters) {
    if (ch > target) {
      return ch;
    }
  }

  return letters[0];
};

let letters = ["c", "f", "j"];
let target = "c";

console.log(nextGreatestLetter(letters, target));
