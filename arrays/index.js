var countAsterisks = function (s) {
  let count = 0;
  let inside = false;

  for (let ch of s) {
    if (ch === "|") {
      inside = !inside; // toggle state
    } else if (ch === "*" && !inside) {
      count++;
    }
  }

  return count;
};
