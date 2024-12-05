# Ochoa Tier 1 Week 5 Class | [Video](https://vimeo.com/manage/videos/1036536019/c109d7b953)

### Reminders

Good habits:

- smaller more frequent practice sessions are better than 1-2 long ones
- testing your code
- commenting your code
- committing often with commit messages (trick of starting with "this will")

### Function Review

Functions are critical to understand moving forward!

Example function definition:

```
function sayHello( name ){
  return 'Hello, ' + name;
  // OR
  // return `Hello, ${name}`;
}
```

Calling the function:

```
let message = sayHello;
console.log( 'The message is', message );
```

Key parts:

- function name - `sayHello`
- input parameters - `name`
- output or return value

### Function Summary

- Functions are values. They can be assigned, copied or declared in any place of the code.
- If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
- If the function is created as a part of an expression, it’s called a “Function Expression”.
- Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
- Function Expressions are created when the execution flow reaches them.

In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

#### [Difference between function declaration and function expression](https://javascript.info/function-expressions#function-expression-vs-function-declaration)

#### Assignment Code Walkthrough

Work through Stretch goal for `isFull` - using a function inside another function.

Can write `addItem` or start with the following:

```JavaScript
basket = [];
maxItems = 3;

function addItem( item ) {
    basket.push(item);
    return true;
}

// Remember to test your functions!!!
console.log('Basket is:', basket);
console.log('Add apple: ', addItem('apple'));
console.log('Add banana: ', addItem('banana'));
console.log('Add orange: ', addItem('orange'));
console.log('Add kiwi: ', addItem('kiwi'));
console.log('Basket is:', basket);
```

Work toward:

```JavaScript
basket = [];
maxItems = 3;

function addItem( item ) {
  let full = isFull();
  if ( full ){
    return false;
  } else {
    basket.push(item);
    return true;
  }
}

// Remember to test your functions!!!
console.log('Basket is:', basket);
console.log('Add apple: ', addItem('apple'));
console.log('Add banana: ', addItem('banana'));
console.log('Add orange: ', addItem('orange'));
console.log('Add kiwi - expect false now: ', addItem('kiwi'));
console.log('Basket is:', basket);

function isFull() {
  if (basket.length >= maxItems){
    return true;
  }
  return false;
}
basket = [1, 2, 3]
console.log('Basket is:', basket);
console.log('isFull? - true', isFull());
basket = [ 1 ]
console.log('Basket is:', basket);
console.log('isFull? - false', isFull());
```
