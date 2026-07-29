var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      count++;
    }
  }
  return count;
};
((startTime = [4]), (endTime = [4]), (queryTime = 4));
console.log(busyStudent(startTime, endTime, queryTime));
