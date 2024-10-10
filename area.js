//area

// height = 10
// width = 20
// area = height * width
// console.log(area);

//area is the identifier/name
//width and height are the received parameters
function area(width, height){
    //calculate and then send back the result to the caller
    const resultArea = width * height; //calculate
    return resultArea; //send back to the caller
}

//call function by name, pass both arguments, and recieve and print result
console.log(area(10, 20));// 10 and 20 are the arguments being passed
//two more times!
console.log(area(12, 20));
console.log(area(24, 40));

// let height = 10
// let width = 20
// let myArea = area(width, height)
// console.log(myArea)