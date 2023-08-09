console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

const maxItems = 5; //set a global constant of 5 items allowed in the basket

let isFull = false;

function addItem( item ) {
    basket.push(item); //adds item
    return true; // after successfully adding item
}

console.log( basket );  // should be empty in console


let item1 = addItem( 'Kale' );  //defined a 
console.log( item1 );
console.log( basket ); 

let item2 = addItem( 'Ice Cream' );
console.log( item2 );
console.log( basket );


function listItems() { //start listItems
    for ( let item of basket ) {  // loop to run through basket 
        console.log( item );  // then log the items in it
    }
}  // end listItems


listItems();  // running function listItems to test in console

addItem( 'Bread' );  // added an item for test
console.log( basket );  

listItems();  // test after adding an item




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
