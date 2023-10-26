

const buttonsDiv = document.querySelector("#calculator_buttons");
const calcDisplay = document.querySelector("#calculator_display");

buttonsDiv.addEventListener("click", e => {
    let action = e.target.dataset.action;
    if (!(action === undefined)) {
        console.log(action);
    } else {
        console.log("number");
        appendToCurrentNum(e.target.innerText);
    }
})

function appendToCurrentNum(val) {
    if (calcDisplay.innerText === "0" && calcDisplay.innerText.length === 1) {
        calcDisplay.innerText = val;
    }
}

function clearCurrentNum() {
    
}