import { operations } from "./operations.js";
import { notAMainFunction } from "./util.js";

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
        this.currentValue = this.currentValue.toString().slice(0, -1);
    }
    appendNumber(number) {
        // console.log(number, this.currentValue);
        if (number == '.' && this.currentValue.includes('.')) return;
        if (number == '0' && this.currentValue.length == 1
            && this.currentValue[this.currentValue.length - 1] == '0') return;
        if (this.currentValue[0] == '0' && this.currentValue.length == 1 && number != '.') return;
        this.currentValue += number.toString();
    }
    chooseOperation(operation) {
        if (this.currentValue == '') {
            if (this.operation == operation) return;
            else {
                this.operation = operation;
                return;
            }
        }
        if (this.previousValue != '') {
            this.compute();
        } else {
            if (notAMainFunction(operation)) {         // CHECK NON MAIN FUNCTION
                this.operation = operation;
                this.compute();
                return;
            }
        }
        this.operation = operation;
        if (notAMainFunction(operation)) {         // CHECK NON MAIN FUNCTION
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
        // console.log(prev, current, this.operation);
        if (isNaN(current) || this.currentValue == '') return;
        else if (isNaN(prev) || this.previousValue == '') {
            if (notAMainFunction(this.operation)) {         // CHECK NON MAIN FUNCTION
                computation = operations[this.operation](current);
            } else return;
        } else computation = operations[this.operation](prev, current);
        this.currentValue = computation.toString();
        this.operation = undefined;
        this.previousValue = '';
    }
    updateDisplay() {
        this.currentEl.textContent = this.currentValue;
        this.previousEl.textContent = this.previousValue;
    }
}
