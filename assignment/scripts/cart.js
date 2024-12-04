console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named basket and set it to an empty array.
const basket = [];
const maxItems = 5;

/*
Create a function called addItem. It should:
    take an input parameter for a string item
    add the new item to the global array basket.
    return true indicating the item was added

Update the required addItem function to:
    Use the isFull function to prevent more than maxItems from being added to the basket.
    If an item was added to the array, return true
    If there was no room and the item could not be added return false
*/
function addItem(item) {
  if (isFull()) {
    return false;
  } else {
    basket.push(item);
    return true;
  }
}

/*
Create a function called listItems. It should:
    loop over the items in the basket array
    console.log each individual item on a new line
*/
function listItems() {
  for (let item of basket) {
    console.log(`\titem: ${item}`);
  }
}

/*
Create a function called empty. It should:
    reset the basket to an empty array
    do not use basket = [] to reset the array
*/
function empty() {
  basket.length = 0;
}

/*
Create a function called isFull(). It should:
    return false if the basket contains less than max number of items
    return true otherwise (equal or more than maxItems)
*/
function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}

/*
Create a function called removeItem. It should:
    Take an input parameter for a string item
    Use Array.indexOf to find the index of the first matching item in the basket.
    Use Array.splice to remove the first matching item from the basket.
    Return the item removed or null if the item was not found
*/
function removeItem(item) {
  const itemIndex = basket.indexOf(item); //will be a number

  //arr.indexOf returns -1 if not in the array
  //check for positive values and value of zero (first item in the basket!)
  if (itemIndex >= 0) {
    //look up how arr.splice works
    const removedItem = basket.splice(itemIndex, 1);
    //arr.splice returns an array, must index this array for the actual item
    const justTheItem = removedItem[0];
    return justTheItem;
  }

  //return null if item not in the basket
  return null;
}

//basket size
console.log(`basket has ${basket.length} items`);
//add items to the basket
console.log('coffee added to basket', addItem('coffee'));
console.log('beans added to basket', addItem('beans'));
console.log('creamer added to basket', addItem('creamer'));
console.log('water added to basket', addItem('water'));

//list items in the basket
listItems();

//add another item to the basket
console.log('sugar added to basket', addItem('sugar'));

//add another item to the basket, what happened?
console.log('spoon added to basket', addItem('spoon'));

//basket size
console.log(`basket has ${basket.length} items`);

//empty basket
// console.log('empty the basket!');
// empty();

//basket size
console.log(`basket is: `, basket);

//create variable to hold a removedItem
let foundItem = '';

//remove spoon from basket
foundItem = removeItem('spoon');
console.log(foundItem ? `Removed ${foundItem} from the basket` : 'spoon was not found...');
// remove fork from basket
foundItem = removeItem('fork');
console.log(foundItem ? `Removed ${foundItem} from the basket` : 'fork was not found...');
//remove beans from basket
foundItem = removeItem('beans');
console.log(foundItem ? `Removed ${foundItem} from the basket` : 'beans was not found...');

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
