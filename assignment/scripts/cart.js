console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

const maxItems = 5; // set a global constant of 5 items allowed in the basket

function addItem( item ) {
    basket.push(item); // adds item to basket
    return true; // after successfully adding item
}

console.log( basket );  // the basket should be empty then logged to console (here)


let item1 = addItem( 'Kale' );  // defined an item 
console.log( item1 );  // log to see if successfully added to basket
console.log( basket );   // log items of basket

let item2 = addItem( 'Ice Cream' );  // defined a second item
console.log( item2 );  
console.log( basket );


function listItems() { // start a function listItems
    for ( let item of basket ) {  // this will loop to run through basket 
        console.log( item );  // then log the items in it
    }
}  // end listItems


listItems();  // running function listItems to test in console

addItem( 'Bread' );  // added an item for test
console.log( basket );  // chacking contents of basket

listItems();  // calling the function after adding an item





let basketItems = [ item1, item2,]  // items in our basket

function isFull( items ) {  // this starts a new function called 'isFull'
    return items.length >= maxItems;  // this should evaluate to false since there are only 2 items in basket
}

if ( isFull( basketItems ) ) {
    console.log( 'The basket is full, no more items!' );  // if the isFull is true, then it will log this
} else {
    console.log( 'The basket is not full, it has: ' + basketItems.length + ' items.' );  // otherwise, it will log the number of items in the basket
}


console.log( isFull( basketItems ) ); // using the isFull function to check our basketItems, logging the result (false)

addItem( 'Bananas' );  // adding some items to test the isFull function, would like it to return true
addItem( 'Oatmeal' );
addItem( 'Pizza' );



console.log( basket );  // logging the contents of basket
listItems();  // calling the listItems function to log the contents of the basket in console

console.log( isFull( basket ) ); // this will evaluate to true now that we have the max amount of items (5)
if ( isFull( basket ) ) {  // if the basket isFull, then 
    console.log( 'The basket is full, no more items!' );  // log to test
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
} catch(e) {
    // Do nothing
}
