function addCourse() {
    let container = document.getElementById("class-list");
    container.innerHTML = container.innerHTML.concat("<label>Course: <button type=\"button\" onclick=\"deleteCourse(this)\">Delete Course</button><br><textarea></textarea></label>");
}

function deleteCourse(element) {
    element.parentElement.remove();
}