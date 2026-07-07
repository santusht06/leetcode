/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let character = address.split("");

  for (let i = 0; i < character.length; i++) {
    if (character[i] === ".") {
      character[i] = "[.]";
    }
  }

  return character.join("");
};

address = "1.1.1.1";

console.log(defangIPaddr(address));
