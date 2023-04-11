import { Calculator } from "./src/class.js";

const allBtns = document.querySelectorAll('.calculator-grid > button');
const currentEl = document.querySelector('.current-operand');
const previousEl = document.querySelector('.previous-operand');
const ansDisplayEl = document.querySelector('#ans-display');
const stoDisplayEl = document.querySelector('#sto-display');
const modeToggler = document.querySelector('#check');
const togglerEL = document.querySelector('#toggler');
const bodyEL = document.querySelector('body');
const convCtr = document.querySelector('#conversion-ctr');
const conversionEl = document.querySelectorAll('.conversion');
const conversionBg = document.querySelectorAll('option');
const convertBtn = convCtr.querySelector('button');
const historyCtr = document.querySelector('#history-ctr');
const historySelect = historyCtr.querySelector('#history');

const calculator = new Calculator(previousEl, currentEl, ansDisplayEl, stoDisplayEl, historySelect);
calculator.renderHistory();

modeToggler.addEventListener('change', loadColorMode);
convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    let from = target.parentElement.querySelector('select:nth-of-type(1)').value;
    let to = target.parentElement.querySelector('select:nth-of-type(2)').value;
    if (from == to) return;
    calculator.conversion(from + '-' + to);
    // console.log(from + '-' + to, calculator.currentValue);
    calculator.updateDisplay();
});

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
        if (target.textContent != Number(target.textContent) && target.textContent != '.'
            && target.textContent != 'A' && target.textContent != 'B'
            && target.textContent != 'C' && target.textContent != 'D'
            && target.textContent != 'E' && target.textContent != 'F') {
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
                    if (calculator.currentValue == '') {
                        if (calculator.previousValue == '') return;
                    }
                    // if (calculator.previousValue != '') calculator.compute();
                    calculator.chooseOperation('y√x');
                } else if (target.textContent == 'UseHistory') {
                    if (historySelect.value == 'empty') return;
                    calculator.appendNumber(historySelect.value.split(',').join(''));
                } else {
                    // includes: % x! ln log sin cos tan and more
                    // must have an operation created with the same key name
                    if (calculator.currentValue == '') {
                        if (target.textContent != '+' && target.textContent != '-'
                            && target.textContent != '×' && target.textContent != '÷'
                            && target.textContent != 'xy' && target.textContent != 'y√x')
                            return;
                    } else {
                        calculator.chooseOperation(target.textContent);
                        calculator.updateDisplay();
                        return;
                    }
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

// TODO - add all into one array and switch them within one loop
function loadColorMode(e) {
    e.preventDefault();
    allBtns.forEach(btn => {
        btn.classList.toggle('dark');
        btn.classList.toggle('mode');
        btn.classList.toggle('switch');
    })
    conversionEl.forEach(x => {
        x.classList.toggle('dark');
        x.classList.toggle('mode');
        x.classList.toggle('switch');
    })
    conversionBg.forEach(x => {
        x.classList.toggle('dark');
        x.classList.toggle('mode');
        x.classList.toggle('switch');
    })
    convCtr.classList.toggle('dark');
    convCtr.classList.toggle('mode');
    convCtr.classList.toggle('switch');
    togglerEL.classList.toggle('dark');
    togglerEL.classList.toggle('mode');
    togglerEL.classList.toggle('switch');
    bodyEL.classList.toggle('dark');
    bodyEL.classList.toggle('mode');
    bodyEL.classList.toggle('switch');
    historyCtr.classList.toggle('dark');
    historyCtr.classList.toggle('mode');
    historyCtr.classList.toggle('switch');
    historySelect.classList.toggle('dark');
    historySelect.classList.toggle('mode');
    historySelect.classList.toggle('switch');
}
