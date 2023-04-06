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

    }
    updateDisplay() {
        this.currentEl.textContent = this.currentValue;
        this.previousEl.textContent = this.previousValue;
    }
}
