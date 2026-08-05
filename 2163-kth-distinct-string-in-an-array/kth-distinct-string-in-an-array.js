var kthDistinct = function (arr, k) {
  const map = new Map();

  arr.forEach((el) => {
    map.set(el, (map.get(el) || 0) + 1);
  });

  let distict = 0;

  for (let el of arr) {
    if (map.get(el) === 1) {
      distict++;

      if (distict === k) {
        return el;
      }
    }
  }
  return "";
};

((arr = ["d", "b", "c", "b", "c", "a"]), (k = 2));

console.log(kthDistinct(arr, k));
