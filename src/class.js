import { operations } from "./operations.js";
import { notAMainFunction } from "./util.js";

export class Calculator {
    constructor(previousEl, currentEl, ansDisplayEl, stoDisplayEl, historySelect) {
        this.previousEl = previousEl;
        this.currentEl = currentEl;
        this.ansDisplayEl = ansDisplayEl;
        this.stoDisplayEl = stoDisplayEl;
        this.historySelect = historySelect;
        this.previousValue = '';
        this.currentValue = '';
        this.operation = undefined;
        this.storage = null;
        this.answer = null;
        this.history = [];
    }
    callPreviousAnswer() {
        let result = this.answer;
        if (result) {
            return result;
        } else return '';
    }
    recall() {
        let result = this.storage;
        if (result) {
            this.storage = null;
            return result;
        } else return '';
    }
    store(number) {
        this.storage = number;
        return '';
    }
    clear() {
        this.previousValue = '';
        this.currentValue = '';
        this.operation = undefined;
    }
    clearCurrent() {
        this.currentValue = '';
    }
    clearPrev() {
        this.previousValue = '';
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
        if (this.currentValue == '.') return;
        else if (this.currentValue.length > 1 && this.currentValue[0] == '.') {
            this.currentValue = '0' + this.currentValue;
        }
        if (this.previousValue != '') {
            this.compute();
        } else {
            if (notAMainFunction(operation)) { // CHECK NON MAIN FUNCTION (not with 2 parameters)
                this.operation = operation;
                this.compute();
                return;
            }
        }
        this.operation = operation;
        if (notAMainFunction(operation)) {     // CHECK NON MAIN FUNCTION
            this.compute();
            return;
        }
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }
    conversion(type) {
        if (this.currentValue == '') return;
        if (this.currentValue == '.') return;
        else if (this.currentValue.length > 1 && this.currentValue[0] == '.') {
            this.currentValue = '0' + this.currentValue;

        }
        if (this.previousValue != '') {
            this.operation = type;
            this.compute();
        }
        let computation = operations[type](this.currentValue);
        this.answer = computation.toString();
        this.currentValue = computation.toString();
        this.operation = undefined;
        this.previousValue = '';
        this.history.unshift(this.getDisplayNumber(this.currentValue));
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
        this.answer = computation.toString();
        this.currentValue = computation.toString();
        this.operation = undefined;
        this.previousValue = '';
        this.history.unshift(this.getDisplayNumber(this.currentValue));
    }
    updateDisplay() {
        if (this.answer == 'NAN' || this.answer == 'NaN') null;
        else if (this.answer) this.ansDisplayEl.textContent = `Ans: ${this.answer}`;
        else this.ansDisplayEl.textContent = `Ans: empty`;
        if (this.storage) this.stoDisplayEl.textContent = `STO: ${this.storage}`;
        else this.stoDisplayEl.textContent = `STO: empty`;
        if (this.currentValue == 'NAN' || this.currentValue == 'NaN') {
            this.currentEl.textContent = 'Error! Press \'AC\' to clear.';
            return;
        }
        if (this.currentValue[this.currentValue.length - 1] == '.') {
            this.currentEl.textContent = this.currentValue;
        } else {
            this.currentEl.textContent = this.getDisplayNumber(this.currentValue);
        }
        this.renderHistory();
        if (this.operation != null) {
            if (this.operation == 'y√x' || this.operation == 'xy') {
                this.previousEl.textContent =
                    `x = ${this.getDisplayNumber(this.previousValue)} | ${this.operation}`;
            } else {
                this.previousEl.textContent =
                    `${this.getDisplayNumber(this.previousValue)} ${this.operation}`;
            }
        } else {
            this.previousEl.textContent = '';
        }
    }
    renderHistory() {
        this.historySelect.replaceChildren();
        if (this.history.length > 0) {
            this.history.forEach(x => {
                let el = document.createElement('option');
                el.textContent = x;
                this.historySelect.appendChild(el);
            })
        } else {
            let empty = document.createElement('option');
            empty.setAttribute('value', 'empty');
            empty.setAttribute('selected', '');
            empty.textContent = 'Empty';
            this.historySelect.appendChild(empty);
        }
    }
    getDisplayNumber(number) {
        let [integer, decimal] = number.toString().split('.');
        integer = integer.split('');
        let final = [];
        while (integer.length > 0) {
            let result = '';
            result += integer.pop();
            if (integer.length > 0) result += integer.pop();
            if (integer.length > 0) result += integer.pop();
            final.push(result.split('').reverse().join(''));
        }
        return `${final.reverse().join(',')}${decimal ? `.${decimal}` : ''}`;
    }
}
