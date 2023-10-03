// Date & Time
setDate();

function setDate() {
    document.getElementById("dateTime").innerHTML = Date();
    setTimeout(setDate, 1000);
}

function displayGreeting() {
    let name = document.getElementById("name").value;
    let mood = document.getElementById("mood").value;
    document.getElementById("greeting").innerHTML = "Krueger Design Co. welcomes you, " + name + "! We're glad you are doing " + mood + "!";
}

function displayPolygonName() {
    let favoriteNumber = document.getElementById("favoriteNumber").valueAsNumber;
    switch (favoriteNumber) {
        case 1:
            alert("a "+favoriteNumber+" sided shape is called a " +"henagon");
            break;
        case 2:
            alert("a "+favoriteNumber+" sided shape is called a " +"digon");
            break;
        case 3:
            alert("a "+favoriteNumber+" sided shape is called a " +"trigon");
            break;
        case 4:
            alert("a "+favoriteNumber+" sided shape is called a " +"tetragon");
            break;
        case 5:
            alert("a "+favoriteNumber+" sided shape is called a " +"pentagon");
            break;
        case 6:
            alert("a "+favoriteNumber+" sided shape is called a " +"hexagon");
            break;
        case 7:
            alert("a "+favoriteNumber+" sided shape is called a " +"heptagon");
            break;
        case 8:
            alert("a "+favoriteNumber+" sided shape is called a " +"octagon");
            break;
        case 9:
            alert("a "+favoriteNumber+" sided shape is called a " +"enneagon");
            break;
        case 10:
            alert("a "+favoriteNumber+" sided shape is called a " +"decagon");
            break;
    }
}

function insultMe() {
    alert("Are you an ostrich? Cause you make me want to bury my head in the sand!");
}

function insultMyMother() {
    alert("Yo mama so fat when she was born she made the nest fall out of the tree!");
}

function calculateTip() {
    let cost = null;
    while (cost === null) {
        cost = prompt("How much did it cost?");
    }
    alert("Your tip is $"+(cost*.2)+" for a total of $"+(cost*1.2));
}

function calculateNeededCores() {
    let numberOfApps = prompt("How many apps will you be running?");
    let threadsPerCore = prompt("How many threads for each core?");
    alert("You will need "+(numberOfApps/threadsPerCore)+" cores for "+numberOfApps+" apps.");
}