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
    userImageElement.setAttribute("src", loadImage());
    imageFigureElement.appendChild(userImageElement);
    let figureCaption = document.getElementById("image-caption").value;
    let figureCaptionElement = document.createElement("figcaption");
    figureCaptionElement.innerText = figureCaption;
    imageFigureElement.appendChild(figureCaptionElement);
    main.appendChild(imageFigureElement);

    let mainListElement = document.createElement("ul");
    mainListElement.appendChild(generateTopicListItem("background-personal", "Personal Background: "));
    mainListElement.appendChild(generateTopicListItem("background-professional", "Professional Background: "));
    mainListElement.appendChild(generateTopicListItem("background-academic", "Academic Background: "));
    mainListElement.appendChild(generateTopicListItem("computer-platform", "Preferred Computing Platform: "));
    mainListElement.appendChild(generateClassListItem());
    mainListElement.appendChild(generateTopicListItem("memory-fact", "Fun Fact to remember me by: "));
    mainListElement.appendChild(generateTopicListItem("also-share", "I'd also like to share: "));

    main.appendChild(mainListElement);

    let reloadButton = document.createElement("button");
    reloadButton.innerText = "New Intro";
    reloadButton.setAttribute("onclick","location.reload()");

    main.appendChild(reloadButton);

    document.getElementById("main").replaceWith(main);
}

function generateTopicListItem(inputId, labelString) {
    let listItemElement = document.createElement("li");
    let listItemLabel = document.createElement("strong");
    listItemLabel.innerText = labelString;
    listItemElement.appendChild(listItemLabel);
    listItemElement.innerHTML += document.getElementById(inputId).value;
    return listItemElement;
}

function generateClassListItem() {
    let classListElement = document.createElement("li");
    let classListLabel = document.createElement("strong");
    classListLabel.innerText = "Courses I'm Taking & Why: ";
    classListElement.appendChild(classListLabel);

    let classListUlElement = document.createElement("ul");
    let classListInputs = document.getElementById("class-list").children;
    for (let i = 0; i < classListInputs.length; i++) {
        // console.log(classListInputs[i].children[2].value);
        let inputValue = classListInputs[i].children[2].value;
        let item = document.createElement("li");
        item.innerText = inputValue;
        classListUlElement.appendChild(item);
    }

    classListElement.appendChild(classListUlElement);
    return classListElement;
}

function loadImage() {
    let image = document.getElementById("user-image").files[0];
    if (image) {
        let url = URL.createObjectURL(image);
        console.log(url);
        return url;
    } else {
        return "images/flightschool.jpg";
    }
}