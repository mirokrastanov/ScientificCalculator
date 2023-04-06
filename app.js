import { Calculator } from "./src/class.js";

const board = document.querySelector('.calculator-grid');
const currentEl = document.querySelector('.current-operand');
const previousEl = document.querySelector('.previous-operand');
const calculator = new Calculator(previousEl, currentEl);


board.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.tagName != 'BUTTON') return;
    console.log(target.textContent);
    if (target.textContent != Number(target.textContent) && target.textContent != '.') {
        if (target.textContent == '=') {
            calculator.compute();
            calculator.updateDisplay();
        }
        calculator.chooseOperation(target.textContent);
        calculator.updateDisplay();
    } else {
        calculator.appendNumber(target.textContent);
        calculator.updateDisplay();
    }

});

