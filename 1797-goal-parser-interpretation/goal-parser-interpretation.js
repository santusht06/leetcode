var interpret = function (command) {
  let ans = "";

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") {
      ans += "G";
    } else if (command[i] === "(" && command[i + 1] === ")") {
      ans += "o";
      i++;
    } else {
      ans += "al";
      i += 3;
    }
  }
  return ans;
};

command = "G()(al)";

console.log(interpret(command));
