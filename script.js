let firstNum = [];
let lastNum = [];
let operatorSym = 0;

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    if (+b === 0) {
        console.log("ERROR");
        return 0;
    } else {
        return +a / +b;
    }
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
const display = document.querySelector(".display");

const numberValue = document.querySelectorAll(".number").forEach(function(button) {
    button.addEventListener("click", function() {
        if (operatorSym === 0) {
            firstNum.push(+this.value);
            display.value = firstNum.join('');
        }
        if (operatorSym !== 0) {
            lastNum.push(+this.value);
            display.value = lastNum.join('');
        }
    });
});

const operatorValue = document.querySelectorAll(".operator").forEach(function(button) {
    button.addEventListener("click", function() {
        operatorSym = +this.value;
        console.log(operatorSym);
    });
})

const equals = document.querySelector(".equals");

equals.addEventListener("click", () => {
    if (firstNum.length !== 0 && lastNum.length !== 0 && operatorSym !== 0) {
        let firstNumJoin = firstNum.join('');
        let lastNumJoin = lastNum.join('');
        display.value = operate(firstNumJoin, lastNumJoin, operatorSym).toFixed(5);
        firstNum = [];
        lastNum = [];
        operatorSym = 0;
    }
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    firstNum = [];
    lastNum = [];
    operatorSym = 0;
    display.value = "";
    console.log("ALL CLEAR");
})

const decimal = document.querySelector(".decimal");

// EXTRA CREDIT 1 -- ADD DECIMAL FUNCTIONALITY

decimal.addEventListener("click", function() {
        if (operatorSym === 0) {
            firstNum.push(this.value);
            display.value = firstNum.join('');
        }
        if (operatorSym !== 0) {
            lastNum.push(this.value);
            display.value = lastNum.join('');
        }
});