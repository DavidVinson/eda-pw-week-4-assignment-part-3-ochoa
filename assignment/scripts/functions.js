//Examples of function declaration and function expression

//calling the function addNumbers
const sum = addNumbers(2, 4);
console.log('sum', sum);

//function declaration (hoisting)
//hoisting ensures this function is created when the file loads
//and will be available to be called immediately
function addNumbers(num1, num2) {
  return num1 + num2;
}

if (sum > 5) {
  console.log('yes, 6 is greater than 5');
}

//function expression must be created before it can be called
const subtractNumbers = function (num1, num2) {
  return num2 - num1;
};

//here, we call our function expression
const diff = subtractNumbers(5, 6);
console.log('diff', diff);
