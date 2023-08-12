console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

const maxItems = 5; // set a global constant of 5 items allowed in the basket


function addItem(item) {
    if (basket.length >= maxItems) {
        console.log( 'The basket is full, no more items!' );
        return false;  // basket is full, return false
    }
    basket.push(item);
    console.log( item + ' has been added to basket.')
    return true; // successfully added item, return true
        
}


addItem( 'Chicken' );  // adding an item to basket
addItem( 'Ice Cream' );  // defined a second item
 
console.log( basket );  // log items of basket  


function removeItem( item ) {  // function to remove an item from basket
    const index = basket.indexOf(item);  // defined a constant called 'index' to find the index of the first occurence of the specified item
    if ( index !== -1 ) {  // if the item is found
        return basket.splice( index, 1 )[0];  // remove and return the item from the basket using the splice method
    }
    return null;  // if the item is not found in basket
}



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
    return basket.length >= maxItems;  // this should evaluate to false since there are only 3 items in basket
}

function displayBasketStatus() { 
    if ( isFull() ) {
        console.log( 'The basket is full, no more items!' );
    } else {
        console.log( 'The basket is not full, it has: ' + basket.length + ' items.' );
    }
}

displayBasketStatus();  // testing the new function displayBasketStatus in console, should display 3 items
console.log( isFull() ); // using the isFull function to check our basketItems, logging the result (false)

addItem( 'Bananas' );  // adding some items to test the isFull function, would like it to return true
addItem( 'Oatmeal' );
addItem( 'Pizza' );

console.log( 'added more items and now the basket is full, the \'isFull\' function should read true on the next line: ')
console.log( isFull() );  // logged the isFull function, and it returns 'true'


console.log( basket );  // logging the contents of basket. Should have 5 items
listItems();  // calling the listItems function to log the contents of the basket in console
displayBasketStatus();  // this should read that the basket is full


addItem( 'Milk' );  // added some milk to basket
console.log( 'did the milk get added? ', addItem() );  // Here, I got the 'addItem' function to return 'false' since the basket is full

basket.pop();  // removed an item from the basket to test 'addItem'
displayBasketStatus();  // making sure the item was removed
console.log( basket ); // checking the contents of the basket

addItem( 'Milk' );  // adding some milk to basket
displayBasketStatus();





// At this point, I couldn't get a test to pass, specifically -update 'addItem' function stretch goal-
// To solve my issue, I tried emptying my basket first by removing the items:
basket.pop();  // -item 5
basket.pop();  // -item 4
basket.pop();  // -item 3 
basket.pop();  // -item 2
basket.pop();  // -item 1

console.log( 'Removed all items, the basket now contains: ', basket );  // then logging the contents of the basket to make sure it was empty
displayBasketStatus();  // it is indeed empty
// All tests now passed! Moving onto last stretch goal. Refer to 'removeItem' function above


// start test of removeItem function
addItem( 'Pizza' );
addItem( 'Fruit snacks' );
addItem( 'Spinach' );

console.log( 'New test basket contains: ', basket );  // displaying contents of test basket
removeItem( 'Spinach' );  // removing an item, why did I put that in there?!
console.log( 'Removed an item, the test basket now has: ', basket );  // testing if the item made it out of the basket
displayBasketStatus();  // the basket should only display having 2 items
// end test of removeItem function

console.log( 'End of tests, the basket should have ' + basket.length + ' items right now:' );
listItems();
console.log( 'THE TESTS ARE ADDING THE ITEMS BELOW TO THE BASKET: ');





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
