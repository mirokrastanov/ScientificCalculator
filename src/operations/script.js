function solve() {
    let input = document.querySelector('#input');
    let output = document.querySelector('#result');
    let select = document.querySelector('#selectMenuTo');
    let button = document.querySelector('#container button');
    // button.setAttribute("onclick", "solve()");
    let binaryOption = select.querySelector('option');
    let hexOption = document.createElement("option");
    if (select.childElementCount == 1) {    // only initialized once
        binaryOption.textContent = "Binary";
        binaryOption.setAttribute("value", "binary");
        hexOption.textContent = "Hexadecimal";
        hexOption.setAttribute("value", "hexadecimal");
        // select.append(hexOption);
        select.appendChild(hexOption);
    }
    button.addEventListener('click', () => {
        let decimalValue = input.value;
        let hexValue = [];
        let binaryValue = [];
        const hexCode = {
            10: 'A',
            11: 'B',
            12: 'C',
            13: 'D',
            14: 'E',
            15: 'F',
        };
        if (select.value == "hexadecimal") {
            output.value = "";
            let initial = Number(decimalValue);
            if (initial == 0) {
                output.value = '0';
            } else {
                while (initial > 0) {
                    let remainder = initial % 16;
                    initial = Math.floor(initial / 16);
                    if (remainder > 9) {
                        remainder = hexCode[remainder];
                    }
                    hexValue.push(remainder);
                }
                let hexFinal = hexValue.reverse().join("");
                output.value = hexFinal;
            }
        } else if (select.value == "binary") {
            output.value = "";
            let initial = Number(decimalValue);
            if (initial == 0) {
                output.value = '0';
            } else {
                while (initial > 0) {
                    let remainder = initial % 2;
                    initial = Math.floor(initial / 2);
                    binaryValue.push(remainder);
                }
                let binaryFinal = binaryValue.reverse().join("");
                output.value = binaryFinal;
            }
        }
    });
}