//calc

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calc(a, b, operation) {
    let result = 0;
    if ("add" == operation) {
        result = add(a, b);
    } else if ("subtract" == operation) {
        result = subtract(a, b);
    } else if ("divide" == operation) {
        result = divide(a, b);
    } else if ("multiply" == operation) {
        result = multiply(a, b);
    }
    return result;
}

console.log(calc(6, 7, "add"));
console.log(calc(6, 7, "subtract"));
console.log(calc(6, 7, "multiply"));
console.log(calc(6, 7, "divide").toFixed(3));
