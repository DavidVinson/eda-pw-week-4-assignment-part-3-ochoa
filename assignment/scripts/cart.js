console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

basket = [];
maxItems = 3;

function addItem(item) {
  //a condition to check for 'full'
  const full = isFull();
  //can also just call 'isFull()' in the conditional statement
  if (full) {
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
console.log('Add kiwi: ', addItem('kiwi'));
console.log('Basket is:', basket);

console.log('Add grapes: ', addItem('grapes'));

console.log('Basket is:', basket.length);

/*
Create a function called isFull(). It should:
  - return `false` if the basket contains *less* than max number of items
  - return `true` otherwise (equal or more than maxItems)
*/

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== 'undefined' ? basket : undefined,
    addItem: typeof addItem !== 'undefined' ? addItem : undefined,
    listItems: typeof listItems !== 'undefined' ? listItems : undefined,
    maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
    empty: typeof empty !== 'undefined' ? empty : undefined,
    isFull: typeof isFull !== 'undefined' ? isFull : undefined,
    removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
