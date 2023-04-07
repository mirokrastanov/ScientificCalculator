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
            // not a number
            if (target.textContent == '=') {
                if (calculator.previousValue != '') calculator.compute();
                calculator.updateDisplay();
            } else {
                if (target.textContent == 'AC') {
                    calculator.clear();
                } else if (target.textContent == 'DEL') {
                    calculator.delete();
                } else if (target.textContent == 'RCL') {
                    if (calculator.storage == null) return;
                    calculator.clearCurrent();
                    calculator.appendNumber(calculator.recall());
                } else if (target.textContent == 'STO') {
                    if (currentEl.textContent == '') return;
                    calculator.store(currentEl.textContent);
                    calculator.clearCurrent();
                } else {
                    calculator.chooseOperation(target.textContent);
                }
                calculator.updateDisplay();
            }
        } else {
            // number
            calculator.appendNumber(target.textContent);
            calculator.updateDisplay();
        }
    });
});

