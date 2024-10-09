
// COMPUTER VALUES ARE 0 and 1, AKA OFF and ON
// LOGIC TRUE OR FALSE, 0 is usually false and non-zero is usually true

// Bool - Boolean (True/False) Data Type - Reasone/Philosophy into math?

//INPUTS - all three boolean
hasCar = true
hasLicense = true
canReachPedals = true

const meetsAllCriteria = hasLicense && hasCar && canReachPedals;

//CALCULATION
console.log("START")

//DECISION
if(meetsAllCriteria){ //acts as a gate
    //CONDITIONAL CODE MIGHT NOT BE RUN/EXECUTED if expression on 16 is false
    console.log("Zoom");
    console.log("Zoom");
}else{
    console.log("Cry and suffer.") //skipped when all are true
}

//BACK IN MAIN LIN OF CODE
console.log("FINISH")
