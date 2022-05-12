const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((prev, curr) => prev * curr);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  } else {
    let total = num;
    while (num > 1) {
      total = total * (num - 1);
      num -= 1
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
