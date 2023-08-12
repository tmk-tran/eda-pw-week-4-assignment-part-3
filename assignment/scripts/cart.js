console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

const maxItems = 5; // set a global constant of 5 items allowed in the basket

function addItem( item ) {  // here is a function to add an item to basket
    basket.push(item); // adds item to basket
    return true;
}


addItem( 'Chicken' );  // adding an item to basket
addItem( 'Ice Cream' );  // defined a second item
 
console.log( basket );  // log items of basket  


function listItems() { // start a function listItems
    for ( let item of basket ) {  // this will loop to run through basket 
        console.log( item );  // then log the items in it
    }
}  // end listItems


listItems();  // running function listItems to test in console

addItem( 'Bread' );  // added an item for test
console.log( basket );  // chacking contents of basket

listItems();  // calling the function after adding an item


function isFull() {  // this starts a new function called 'isFull'
    if ( basket.length >= maxItems ) {  // this should evaluate to false since there are only 2 items in basket
        console.log( 'The basket is full, no more items!' );
        return true;
    } else {
        console.log( 'The basket is not full, it has: ' + basket.length + ' items.' );
        return false;
    }
}

console.log( isFull() ); // using the isFull function to check our basketItems, logging the result (false)

addItem( 'Bananas' );  // adding some items to test the isFull function, would like it to return true
addItem( 'Oatmeal' );
addItem( 'Pizza' );

console.log( isFull() );  // logged the isFull function, and it returns 'true'

console.log( basket );  // logging the contents of basket
listItems();  // calling the listItems function to log the contents of the basket in console

console.log( isFull() ); // this will evaluate to true now that we have the max amount of items (5)
console.log( basket ); // logging the contents of our current basket. Should have 5 items.

function addItem(item) {
    if (basket.length >= maxItems) {
        return false;  // basket is full, return false
    }
    basket.push(item);
    return true; // successfully added item, return true
        
}

addItem( 'Milk' );  // added some milk to basket

console.log( basket );  // checking the contents of the basket (should be 5 items)
console.log(addItem());  // Here, I got the 'addItem' function to return 'false' since the basket is full

basket.pop();  // removed an item from the basket to test 'addItem'
console.log( basket ); // checking the contents of the basket
console.log(addItem());  // Here, I got the 'addItem' function to return true



// At this point, I couldn't get a test to pass, specifically -update 'addItem' function stretch goal-
// To solve my issue, I tried emptying my basket first by removing the items:
basket.pop();  // -item 5
basket.pop();  // -item 4
basket.pop();  // -item 3 
basket.pop();  // -item 2
basket.pop();  // -item 1

console.log( basket );  // then logging the contents of the basket to make sure it was empty
// Tests are now passed! Moving onto next stretch goal below:

console.log( isFull() );
// function removeItem 



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
} catch(e) {
    // Do nothing
}
