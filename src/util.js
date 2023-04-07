// UPDATE with other 2 parameter functions...

export function notAMainFunction(operation) {
    return operation != '+' && operation != '-'
        && operation != '×' && operation != '÷'
        && operation != 'xy';
}

let storage = null;

export function recall() {
    let result = storage;
    if (result) {
        storage = null;
        return result;
    } else {
        return '';
    }
}
export function store(a) {
    storage = a;
    return '';
}
