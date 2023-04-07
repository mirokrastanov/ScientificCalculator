// function strings
//  +, -, ×, ÷, x2, 

// after adding a new --- 2 parameter function (a MAIN function) --- go to util and 
// update the --- notAMainFunction --- to include the new operations[keyName]

export const operations = {
    '+': sum,
    '-': subtract,
    '×': multiply, // alt (a, b) => a * b,
    '÷': divide,
    'x2': xPower2,
    'xy': xPowerY,
    '√': sqrtX,
    'y√x': yRootX,
    '%': calcPercent,

}
// a (prev) | b (current)
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
    return Math.pow(a, 2);
}
function xPowerY(a, b) {    // 2 parameter function = MAIN
    return Math.pow(a, b);
}
function sqrtX(a) {
    return Math.sqrt(a);
}
function yRootX(a, b) {     // 2 parameter function = MAIN
    return Math.pow(a, (1 / b));
}
function calcPercent(a) {
    return a / 100;
}
