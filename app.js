import { Calculator } from "./src/class.js";

const allBtns = document.querySelectorAll('.calculator-grid > button');
const currentEl = document.querySelector('.current-operand');
const previousEl = document.querySelector('.previous-operand');
const calculator = new Calculator(previousEl, currentEl);

allBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.currentTarget;
        // console.log(target.textContent);
        if (target.textContent != Number(target.textContent) && target.textContent != '.') {
            if (target.textContent == '=') {
                calculator.compute();
                calculator.updateDisplay();
            } else {
                calculator.chooseOperation(target.textContent);
                calculator.updateDisplay();
            }
        } else {
            calculator.appendNumber(target.textContent);
            calculator.updateDisplay();
        }
    });
});
