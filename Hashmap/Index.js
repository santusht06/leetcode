/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let arr = [...map.keys()];

  test = arr.sort((a, b) => map.get(b) - map.get(a));

  let result = "";

  for (let char of arr) {
    result += char.repeat(map.get(char));
  }

  return result;
};

let s = "tree";

console.log(frequencySort(s));
