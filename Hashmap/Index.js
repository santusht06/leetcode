/**
 * @param {string[]} words
 * @return {number[]}
 */
var groupStrings = function (words) {
  const n = words.length;

  // DSU setup
  let parent = Array.from({ length: n }, (_, i) => i);
  let size = new Array(n).fill(1);

  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  const union = (a, b) => {
    let pa = find(a);
    let pb = find(b);
    if (pa === pb) return;

    parent[pb] = pa;
    size[pa] += size[pb];
  };

  // convert words to bitmask
  let maskMap = new Map();

  const getMask = (word) => {
    let mask = 0;
    for (let ch of word) {
      mask |= 1 << (ch.charCodeAt(0) - 97);
    }
    return mask;
  };

  let masks = words.map(getMask);

  // connect same masks
  for (let i = 0; i < n; i++) {
    if (maskMap.has(masks[i])) {
      union(i, maskMap.get(masks[i]));
    } else {
      maskMap.set(masks[i], i);
    }
  }

  // try all transformations
  for (let i = 0; i < n; i++) {
    let mask = masks[i];

    // remove one letter
    for (let b = 0; b < 26; b++) {
      if (mask & (1 << b)) {
        let newMask = mask ^ (1 << b);

        if (maskMap.has(newMask)) {
          union(i, maskMap.get(newMask));
        }

        // replace: remove b and add another bit
        for (let k = 0; k < 26; k++) {
          if (!(mask & (1 << k))) {
            let replaced = newMask | (1 << k);
            if (maskMap.has(replaced)) {
              union(i, maskMap.get(replaced));
            }
          }
        }
      }
    }
  }

  // count groups
  let groupCount = 0;
  let maxSize = 0;

  for (let i = 0; i < n; i++) {
    if (find(i) === i) {
      groupCount++;
      maxSize = Math.max(maxSize, size[i]);
    }
  }

  return [groupCount, maxSize];
};
