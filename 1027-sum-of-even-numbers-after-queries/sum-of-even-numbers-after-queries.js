var sumEvenAfterQueries = function (nums, queries) {
  let result = [];

  for (let i = 0; i < queries.length; i++) {
    let [value, index] = queries[i];

    nums[index] += value;

    result.push(
      nums
        .filter((el) => el % 2 === 0)
        .reduce((acc, curr) => acc + curr, 0),
    );
  }

  return result;
};