//calling the function addNumbers
const sum = addNumbers(2, 4);
console.log('sum', sum);

//function declaration (hoisting)
function addNumbers(num1, num2) {
  return num1 + num2;
}

if (sum > 5) {
  console.log('yes, 6 is greater than 5');
}

const diff = subtractNumbers(5, 6);
console.log('diff', diff);

//function expression
const subtractNumbers = function (num1, num2) {
  return num2 - num1;
};
