export const operations = {
    '+': sum,
    '-': subtract,
    '×':  multiply, // alt (a, b) => a * b,
    '÷': divide,

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
