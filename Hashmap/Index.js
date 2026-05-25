/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function (password) {
  let missingTypes = 0;

  if (!/[a-z]/.test(password)) {
    missingTypes++;
  }

  if (!/[A-Z]/.test(password)) {
    missingTypes++;
  }

  if (!/[0-9]/.test(password)) {
    missingTypes++;
  }

  let n = password.length;

  if (n < 6) {
    return Math.max(6 - n, missingTypes);
  }

  if (n <= 20) {
    let replace = 0;

    for (let i = 0; i < n; ) {
      let j = i;

      while (j < n && password[j] === password[i]) {
        j++;
      }

      let len = j - i;

      replace += Math.floor(len / 3);

      i = j;
    }

    return Math.max(replace, missingTypes);
  }

  let deleteCount = n - 20;
  let replace = 0;

  let arr = [];

  for (let i = 0; i < n; ) {
    let j = i;

    while (j < n && password[j] === password[i]) {
      j++;
    }

    let len = j - i;

    if (len >= 3) {
      arr.push(len);
    }

    i = j;
  }

  arr.sort((a, b) => (a % 3) - (b % 3));

  for (let i = 0; i < arr.length && deleteCount > 0; i++) {
    let need = (arr[i] % 3) + 1;

    if (deleteCount >= need) {
      arr[i] -= need;
      deleteCount -= need;
    }
  }

  for (let len of arr) {
    if (len >= 3) {
      replace += Math.floor(len / 3);
    }
  }

  return n - 20 + Math.max(replace, missingTypes);
};

console.log(strongPasswordChecker("a"));
