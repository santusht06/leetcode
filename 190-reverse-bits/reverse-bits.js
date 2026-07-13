var reverseBits = function (n) {
  let binary = n.toString(2).padStart(32, "0");

  let rev = binary.split("").reverse().join("");

  return parseInt(rev, 2);
};