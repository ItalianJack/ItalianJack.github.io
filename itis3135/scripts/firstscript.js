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