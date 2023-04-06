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
        this.currentValue += number.toString();
    }
    chooseOperation(operation) {
        if (this.currentValue == '') return;
        if (this.previousValue != '') {
            this.compute();
        }
        this.operation = operation;
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }
    compute() {
        let computation;
        const prev = Number(this.previousValue);
        const current = Number(this.currentValue);
        if (isNaN(prev) || isNaN(current)) return;
        computation = operations[this.operation](prev, current);
        this.currentValue = computation;
        this.operation = undefined;
        this.previousValue = '';
    }
    updateDisplay() {
        this.currentEl.textContent = this.currentValue;
        this.previousEl.textContent = this.previousValue;
    }
}
