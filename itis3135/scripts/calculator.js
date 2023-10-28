

const buttonsDiv = document.querySelector("#calculator_buttons");
const calcDisplay = document.querySelector("#calculator_display");

let operation = null;
let storedNum = 0;

buttonsDiv.addEventListener("click", e => {
    let action = e.target.dataset.action;
    switch (action) {
        default:
            appendDisplayCurrent(e.target.innerText);
            break;
        case "clear":
            clearCurrentNum();
            break;
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
            storeNumber();
            operation = action;
            console.log("Operation: " + operation);
            break;
        case "equals":
            if (operation !== null) {
                calcDisplay.innerText = calculate();
                storedNum = 0;
                operation = null;
            }
            break;
        case "negate":
            if (calcDisplay.innerText === "0") {
                break;
            } else if (calcDisplay.innerText[0] === "-") {
                calcDisplay.innerText = calcDisplay.innerText.slice(1);
            } else {
                calcDisplay.innerText = "-" + calcDisplay.innerText;
            }
    }
});

function appendDisplayCurrent(val) {
    if (calcDisplay.innerText === "0" && calcDisplay.innerText.length === 1) {
        calcDisplay.innerText = val;
    } else {
        calcDisplay.innerText += val;
    }
}

function storeNumber() {
    if (storedNum !== 0) {
        storedNum = calculate();
    } else {
        storedNum = parseFloat(calcDisplay.innerText);
    }
    clearCurrentNum();
    console.log("Stored number: " + storedNum);
}

function clearCurrentNum() {
    calcDisplay.innerText = 0;
}

function calculate() {
    switch (operation) {
        case "add":
            return storedNum + parseFloat(calcDisplay.innerText);
        case "subtract":
            return storedNum - parseFloat(calcDisplay.innerText);
        case "divide":
            return storedNum / parseFloat(calcDisplay.innerText);
        case "multiply":
            return storedNum * parseFloat(calcDisplay.innerText);
        default:
            console.log("Error in calculate()!");
            return -1;
    }
}