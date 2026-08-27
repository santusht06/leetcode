var countTime = function (time) {
  let count = 1;

  if (time[0] === '?' && time[1] === '?') {
    count *= 24;
  } else if (time[0] === '?') {
    count *= (Number(time[1]) <= 3 ? 3 : 2);
  } else if (time[1] === '?') {
    count *= (Number(time[0]) <= 1 ? 10 : 4);
  }

  if (time[3] === '?') {
    count *= 6;
  }

  if (time[4] === '?') {
    count *= 10;
  }

  return count;
};