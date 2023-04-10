// function strings
//  +, -, ×, ÷, x2, xy, √, y√x, %, x!, 

// after adding a new --- 2 parameter function (a MAIN function) --- go to util and 
// update the --- notAMainFunction --- to include the new operations[keyName]

export const operations = {
    '+': sum,
    '-': subtract,
    '×': multiply, // alt (a, b) => a * b,
    '÷': divide,
    'x2': xPower2,
    'xy': xPowerY,
    '√': sqrtX,
    'y√x': yRootX,
    '%': calcPercent,
    'x!': calcFactorial,
    'ln': naturalLog,
    'log': logarithmOf,
    'sin': sineFromNum,
    'cos': cosineFromNum,
    'tan': tangentFromNum,
    'dec-bin': decToBin,
    'dec-oct': decToOct,
    'dec-hex': decToHex,
    'bin-dec': binToDec,
    'bin-oct': binToOct,
    'bin-hex': binToHex,
    'oct-dec': octToDec,
    'oct-bin': octToBin,
    'oct-hex': octToHex,
    'hex-dec': hexToDec,
    'hex-bin': hexToBin,
    'hex-oct': hexToOct,

}
// a (prev) | b (current)
function sum(a, b) { return a + b }      // 2 parameter function = MAIN
function subtract(a, b) { return a - b }     // 2 parameter function = MAIN
function multiply(a, b) { return a * b }     // 2 parameter function = MAIN
function divide(a, b) { return a / b }  // 2 parameter function = MAIN
function xPower2(a) { return Math.pow(a, 2) }
function xPowerY(a, b) { return Math.pow(a, b) }  // 2 parameter function = MAIN
function sqrtX(a) { return Math.sqrt(a) }
function yRootX(a, b) { return Math.pow(a, (1 / b)) }   // 2 parameter function = MAIN
function calcPercent(a) { return a / 100 }
function calcFactorial(a) {
    let res = a;
    if (a == 1 || a == 0) return 1;
    while (a > 1) {
        a--;
        res *= a;
    }
    return res;
}
function naturalLog(a) { return Math.log(a) }
function logarithmOf(a) { return Math.log10(a) }
function sineFromNum(a) { return Math.sin(a) }
function cosineFromNum(a) { return Math.cos(a) }
function tangentFromNum(a) { return Math.tan(a) }
// conversions below
function decToBin(a) { return Number(a).toString(2) }
function decToOct(a) { return Number(a).toString(8) }
function decToHex(a) { return Number(a).toString(16).toUpperCase() }
function binToDec(a) { return }
function binToOct(a) { return }
function binToHex(a) { return }
function octToDec(a) { return }
function octToBin(a) { return }
function octToHex(a) { return }
function hexToDec(a) { return parseInt(String(a), 16) }
function hexToBin(a) { return parseInt(String(a), 2) }
function hexToOct(a) { return parseInt(String(a), 8) }
