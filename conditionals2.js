// LOGICAL OPERATORS
// && AND (all must be true)
// || OR (either is true)
// == comparison (are the the same)
// === strict comparison (compares both value and datatype)
// != NOT Equal
// !== strict
// >= greater than or equal 
// <= less than or equal to
// > greater than
// < less than

//inputs
let height = 50;
let minimum = 55;

//precalculating the boolean expression into variable
let canRide = height >= minimum; // no/false vs yes/true

console.log("START"); // unconditional - always

if(canRide){ // CONDITIONAL expression - decide which path based on boolean true/false
    // expression was true
    console.log("Weeeeeeeee!!!!!"); //sometimes depending on the condition
}else{ //ALTERNATE
    // expression was false
    console.log("sadly watching the fun"); //sometimes depending on the condition
}

console.log("END"); //unconditional - always
