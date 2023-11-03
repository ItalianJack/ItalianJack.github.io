let persons = ["John Krueger", "Harry Potter", "Ronald Weasley", "Hermione Granger", "Neville Longbottom", "Fred Weasley", "Luna Lovegood"];
let salaries = [12500, 7750, 6750, 8500, 9250, 5000, 6500];

function addSalary() {
    let nameField = document.querySelector("#nameInput");
    let salaryField = document.querySelector("#salaryInput");
    persons.push(nameField.value);
    nameField.value = null;
    salaries.push(salaryField.valueAsNumber);
    salaryField.value = null;
    nameField.focus();
}

function displayResults() {
    let highest = salaries[0];
    let sum = 0;
    salaries.forEach((currentValue) =>  {
        sum += currentValue;
        if (highest < currentValue) {
            highest = currentValue;
        }
    })
    let avg = sum / salaries.length;

    let outputDiv = document.createElement("div");
    outputDiv.setAttribute("id","results");
    let highestLabel = document.createElement("h3");
    highestLabel.innerText = "Highest salary:";
    outputDiv.appendChild(highestLabel);
    let highestDisplay = document.createElement("p");
    highestDisplay.innerText = "" + highest;
    outputDiv.appendChild(highestDisplay);
    let avgLabel = document.createElement("h3");
    avgLabel.innerText = "Average salary:";
    outputDiv.appendChild(avgLabel);
    let avgDisplay = document.createElement("p");
    avgDisplay.innerText = "" + avg;
    outputDiv.appendChild(avgDisplay);

    let currentDiv = document.querySelector("#results");
    if (currentDiv != null) {
        currentDiv.innerHTML = outputDiv.innerHTML;
    } else {
        document.querySelector("main").appendChild(outputDiv);
    }
}

function displaySalary() {
    let outputTable = document.createElement("table");
    outputTable.setAttribute("id","results_table");
    let body = document.createElement("tbody");
    outputTable.appendChild(body);
    let headerRow = document.createElement("tr");
    headerRow.innerHTML =  `<th>Name</th><th>Salary</th>`;
    body.appendChild(headerRow);

    for (let i = 0; i < persons.length; i++) {
        let currentRow = document.createElement("tr");
        currentRow.innerHTML = `<td>${persons[i]}</td><td>${salaries[i]}</td>`;
        body.appendChild(currentRow);
    }

    let currentTable = document.querySelector("#results_table");
    if (currentTable != null) {
        currentTable.innerHTML = outputTable.innerHTML;
    } else {
        document.querySelector("main").appendChild(outputTable);
    }
}

document.querySelector("#displayResultsButton").addEventListener("click", displayResults);
document.querySelector("#displaySalaryButton").addEventListener("click", displaySalary);
document.querySelector("form").setAttribute("action", "#");
document.querySelector("form").setAttribute("onsubmit", "addSalary()");
document.querySelector("#nameInput").focus();