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
   


}