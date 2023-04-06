export const operations = {
    '+': sum,
    '-': subtract,
    '×':  multiply, // alt (a, b) => a * b,
    '÷': divide,
    'x2': xPower2,

}

function sum(a, b) {
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
function xPower2(a) {
    console.log(a, Math.pow(a, 2));
    return Math.pow(a, 2);
}
