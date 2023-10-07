function addCourse() {
    let container = document.getElementById("class-list");
    container.innerHTML = container.innerHTML.concat("<label>Course: <button type=\"button\" onclick=\"deleteCourse(this)\">Delete Course</button><br><textarea></textarea></label>");
}

function deleteCourse(element) {
    element.parentElement.remove();
}

function generateIntro() {
    let main = document.createElement("main");

    let name = document.getElementById("name").value;
    let mascot = document.getElementById("mascot").value;
    let nameHeader = document.createElement("h2");
    nameHeader.innerText = name + " | " + mascot;
    main.appendChild(nameHeader);

    let imageFigureElement = document.createElement("figure");
    let userImageElement = document.createElement("img");
    userImageElement.setAttribute("src", "images/flightschool.jpg");
    imageFigureElement.appendChild(userImageElement);
    let figureCaption = document.getElementById("image-caption").value;
    let figureCaptionElement = document.createElement("figcaption");
    figureCaptionElement.innerText = figureCaption;
    imageFigureElement.appendChild(figureCaptionElement);
    main.appendChild(imageFigureElement);

    let mainListElement = document.createElement("ul");
    mainListElement.appendChild(generateIntroTopic("background-personal", "Personal Background: "));
    mainListElement.appendChild(generateIntroTopic("background-professional", "Professional Background: "));
    mainListElement.appendChild(generateIntroTopic("background-academic", "Academic Background: "));
    mainListElement.appendChild(generateIntroTopic("computer-platform", "Preferred Computing Platform: "));
    main.appendChild(mainListElement);

    let classListElement = document.createElement("li");
    let classListLabel = document.createElement("strong");
    classListLabel.innerText = "Courses I'm Taking & Why: ";
    classListElement.appendChild(classListLabel);

    let classListInputs = document.getElementById("class-list").children;
    for (let label in classListInputs) {
        let input = label.getElementsByTagName("textarea")[0];
        
    }

    document.getElementById("main").replaceWith(main);
}

function generateIntroTopic(inputId, labelString) {
    let listItemElement = document.createElement("li");
    let listItemLabel = document.createElement("strong");
    listItemLabel.innerText = labelString;
    listItemElement.appendChild(listItemLabel);
    listItemElement.innerHTML += document.getElementById(inputId).value;
    return listItemElement;
}