console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

const maxItems = 5; // set a global constant of 5 items allowed in the basket

function addItem( item ) {  // here is a function to add an item to basket
    if (isFull()) {
        return false;  // if the basket is full, return false
    }
    basket.push(item); // adds item to basket
    return true;
}


addItem( 'Kale' );  // adding an item to basket
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
    return basket.length >= maxItems;  // this should evaluate to false since there are only 2 items in basket
}

if ( isFull() ) {
    console.log( 'The basket is full, no more items!' );  // if the isFull is true, then it will log this
} else {
    console.log( 'The basket is not full, it has: ' + basket.length + ' items.' );  // otherwise, it will log the number of items in the basket
}


console.log( isFull() ); // using the isFull function to check our basketItems, logging the result (false)

addItem( 'Bananas' );  // adding some items to test the isFull function, would like it to return true
addItem( 'Oatmeal' );
addItem( 'Pizza' );



console.log( basket );  // logging the contents of basket
listItems();  // calling the listItems function to log the contents of the basket in console

console.log( isFull() ); // this will evaluate to true now that we have the max amount of items (5)
if ( isFull() ) {  // if the basket isFull, then 
    console.log( 'The basket is full, no more items!' );  // log to test, and it reads the correct statement
}

console.log( basket ); // logging the contents of our current basket. Should have 5 items.






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
