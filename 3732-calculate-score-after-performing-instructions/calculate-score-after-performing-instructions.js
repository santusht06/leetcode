/**
 * @param {string[]} instructions
 * @param {number[]} values
 * @return {number}
 */
var calculateScore = function (instructions, values) {
  let score = 0;
  let i = 0;
  const visited = new Set();

  while (i >= 0 && i < instructions.length && !visited.has(i)) {
    visited.add(i);

    if (instructions[i] === "add") {
      score += values[i];
      i++;
    } else {
      i += values[i];
    }
  }

  return score;
};
