/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  let split = date.split("-");

  let result = [];

  split.map((el) => {
    result.push(Number(el).toString(2));
  });

  return result.join("-");
};

date = "2080-02-29";

console.log(convertDateToBinary(date));
