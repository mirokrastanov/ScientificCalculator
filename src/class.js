import { operations } from "./operations.js";

export class Calculator {
    constructor(previousEl, currentEl) {
        this.previousEl = previousEl;
        this.currentEl = currentEl;
        this.previousValue = '';
        this.currentValue = '';
        this.operation = undefined;
    }
    clear() {
        this.previousValue = '';
        this.currentValue = '';
        this.operation = undefined;
    }
    delete() {

    }
    appendNumber(number) {
        if (number == '.' && this.currentValue.includes('.')) return;
        if (number == '0' && this.currentValue.length == 1
            && this.currentValue[this.currentValue.length - 1] == '0') return;
        if (this.currentValue[0] == '0' && this.currentValue.length == 1 && number != '.') return;
        this.currentValue += number.toString();
    }
    chooseOperation(operation) {
        if (this.currentValue == '') return;
        if (this.previousValue != '') {
            this.compute();
        } else {
            if (operation == 'x2') {
                this.operation = 'x2';
                this.compute();
                return;
            }
        }
        this.operation = operation;
        if (this.operation == 'x2') {
            this.compute();
            return;
        }
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }
    compute() {
        let computation;
        let prev = Number(this.previousValue);
        let current = Number(this.currentValue);
        if (this.operation == 'x2') computation = operations[this.operation](current);
        else if (isNaN(prev) || isNaN(current)) return;
        else computation = operations[this.operation](prev, current);
        this.currentValue = computation;
        this.operation = undefined;
        this.previousValue = '';
    }
    updateDisplay() {
        this.currentEl.textContent = this.currentValue;
        this.previousEl.textContent = this.previousValue;
    }
}
