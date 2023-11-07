function toggleNav(override = null) {
    let x = document.querySelector("nav");
    if (override != null) {
        x.style.display = override;
    } else {
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
}

document.querySelector("main").addEventListener('click', ()=>{
    toggleNav("none");
});