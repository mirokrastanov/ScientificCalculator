// function strings
//  +, -, ×, ÷, x2, 

// after adding a new --- 2 parameter function (a MAIN function) --- go to util and 
// update the --- notAMainFunction --- to include the new operations[keyName]

export const operations = {
    '+': sum,
    '-': subtract,
    '×':  multiply, // alt (a, b) => a * b,
    '÷': divide,
    'x2': xPower2,

}

function sum(a, b) {        // 2 parameter function = MAIN
    return a + b;
}
function subtract(a, b) {       // 2 parameter function = MAIN
    return a - b;
}
function multiply(a, b) {       // 2 parameter function = MAIN
    return a * b;
}
function divide(a, b) {     // 2 parameter function = MAIN
    return a / b;
}
function xPower2(a) {
    console.log(a, Math.pow(a, 2));
    return Math.pow(a, 2);
}
