var numSteps = function (s) {
  let steps = 0;
  let carry = 0;

  // traverse from right to left (skip first bit)
  for (let i = s.length - 1; i > 0; i--) {
    let bit = Number(s[i]) + carry;

    if (bit === 1) {
      // odd → +1 then /2
      steps += 2;
      carry = 1;
    } else {
      // even → just /2
      steps += 1;
    }
  }

  // if carry remains at MSB
  return steps + carry;
};
