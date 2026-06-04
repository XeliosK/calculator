let first = 0;
let last = 0;
let operator = 0;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(first, last, operator) {
    if (operator === 1) {
        return add(first,last);
    }
    if (operator === 2) {
        return subtract(first,last);
    }
    if (operator === 3) {
        return multiply(first,last);
    }
    if (operator === 4) {
        return divide(first,last);
    }
}

//i think next step to make calculator work with buttons is to add event listener things to pull numbers to JS