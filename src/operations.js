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
    '1/x': calcFraction,

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
function calcFraction(a) { return 1 / Number(a) }

// conversions below
function decToBin(a) { return Number(a).toString(2) } // MAIN conversion
function decToOct(a) { return Number(a).toString(8) } // MAIN conversion
function decToHex(a) { return Number(a).toString(16).toUpperCase() } // MAIN conversion

function binToDec(a) { return parseInt(String(a), 2) } // MAIN conversion
function binToOct(a) { return decToOct(binToDec(a)) }
function binToHex(a) { return decToHex(binToDec(a)) }

function octToDec(a) { return parseInt(String(a), 8) } // MAIN conversion
function octToBin(a) { return decToBin(octToDec(a)) }
function octToHex(a) { return decToHex(octToDec(a)) }

function hexToDec(a) { return parseInt(String(a), 16) } // MAIN conversion 
function hexToBin(a) { return decToBin(hexToDec(String(a))) }
function hexToOct(a) { return decToOct(hexToDec(String(a))) }

