const fizzbuzzcontent = document.querySelector("#fizzbuzzcontent");

for (let i = 1; i <= 100; i++) {
    let tempStr = "";
    if (i % 3 === 0) {
        tempStr += "fizz";
    }
    if (i % 5 === 0) {
        tempStr += "buzz"
    }
    if (i % 7 === 0) {
        tempStr += "BANG"
    }
    if (tempStr === "") {
        tempStr = i;
    }
    fizzbuzzcontent.textContent += tempStr + ", ";
}