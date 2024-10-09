// sample inputs
// var is oldschool but does make it a local var
// let is better as it makes it a local but also indicated mutability(change-able)
// const is better still if it will not be changed/modified.
const identifier = "value"; // = assignment operator like an arrow pointing left <-

const foodCost = 79.25;
const tax = 6.54;
let tip = 12; //let makes this mutable
//include two decimal places

// calculations
const totalDue = foodCost + tax + tip;

// output
// console.log("The total due is " + totalDue);

// console.log("Food cost is " + foodCost + " and tax is " + tax);
// console.log("Tip is " + tip);
// console.log("Total Due is " + totalDue);

const first = "Kevin";

// TEMPLATE STRING USING BACKTICKS ` like a madlib.
console.log(`
My name is ${first}.
Food cost is $${foodCost} and tax is $${tax}.
Tip is $${tip}.
Total Due is $${totalDue}.
`);