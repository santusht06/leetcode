var rangeBitwiseAnd = function (left, right) {
  while (right > left) {
    right &= right - 1;
  }

  return right;
};