export class Calculator {
    constructor(previousEl, currentEl) {
        this.previousEl = previousEl;
        this.currentEl = currentEl;
        this.previousValue = '';
        this.currentValue = '';
    }
    clear() {
        this.previousValue = '';
        this.currentValue = '';
        this.operation = undefined;
    }
    delete() {

    }
    appendNumber(number) {
        this.currentValue += number.toString();
    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.currentEl.textContent = this.currentValue;
    }
}
