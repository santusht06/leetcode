function test(input_1, input_2) {
  ((this.input_1 = input_1), (this.input_2 = input_2));
  return input_1 + input_2;
}

let t1 = new test(1, 3);

console.log(t1);
