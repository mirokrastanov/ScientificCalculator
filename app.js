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
        if (target.textContent == 'π' || target.textContent == 'e') { // no parameter functions
            calculator.clearCurrent();
            if (target.textContent == 'π') calculator.appendNumber((Math.PI).toString());
            else if (target.textContent == 'e') calculator.appendNumber((Math.E).toString());
            calculator.updateDisplay();
            return;
        }
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
                } else if (target.textContent == 'Ans') {
                    if (calculator.answer == null) return;
                    calculator.clearCurrent();
                    calculator.appendNumber(calculator.callPreviousAnswer());
                } else if (target.id == 'y-root-x') {
                    if (calculator.currentValue == '') return;
                    // if (calculator.previousValue != '') calculator.compute();
                    calculator.chooseOperation('y√x');
                } else { 
                    // includes: % x! 
                    // must have an operation created with the same key name
                    if (calculator.currentValue == '') return;
                    if (calculator.previousValue != '') calculator.compute();
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

