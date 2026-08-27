var largestWordCount = function (messages, senders) {
  let object = {};

  for (let i = 0; i < messages.length; i++) {
    let sender = senders[i];
    let count = messages[i].split(" ").length;

    object[sender] = (object[sender] || 0) + count;
  }

  let max = 0;
  let result = "";

  for (let [sender, count] of Object.entries(object)) {
    if (count > max || (count === max && sender > result)) {
      max = count;
      result = sender;
    }
  }

  return result;
};
((messages = [
  "Hello userTwooo",
  "Hi userThree",
  "Wonderful day Alice",
  "Nice day userThree",
]),
  (senders = ["Alice", "userTwo", "userThree", "Alice"]));

console.log(largestWordCount(messages, senders));
