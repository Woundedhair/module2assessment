///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
function addToTotal(total, item) {
    return total + item.price;
}
const summedPrice = cart.reduce(addToTotal, 0);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    const taxAmount = tax * cartTotal;
    const finalNum = cartTotal - couponValue + taxAmount;
    return finalNum;
}
  const cartTotal = 50;
  const couponValue = 15; 
  const tax = 0.06;       
console.log(calcFinalPrice(cartTotal, couponValue, tax));
  


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
firstName: This property stores the first name of the customer.
Data type:(String) Names should be stored as a string data.

lastName: This property stores the last name of the customer.
Data type:(String) Names should be stored as a string.

cart: This property stores the items the customer has added to their cart. 
Data type:(Array) Each element in the array could contain details like name, price, quantity, etc.

phoneNumber: This property stores the phone number of the customer.
Data type:(Number) Phone numbers are represented as numbers.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    firstName: 'Akintomiwa',
    lastName: 'Komolafe',
    cartItems:
        {
          Name: "Pizza",
          price: 5.99,
          quantity: 5,
        },
    phoneNumber: '390-585-2340',
  };
  