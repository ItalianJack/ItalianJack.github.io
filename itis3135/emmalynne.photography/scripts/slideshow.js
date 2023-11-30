const NUM_SLIDES = document.querySelectorAll(".thumbnails img").length;


// Event listeners for thumbnails
document.querySelectorAll(".thumbnails img").forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", showSlideFromEvent);
    thumbnail.index = index;
});

// Event listener for previous button
document.querySelector(".prev").addEventListener("click", function(){
    incrementSlide(-1);
});

// Event listener for next button
document.querySelector(".next").addEventListener("click", function() {
    incrementSlide(1);
});

// Initialize currentSlide and show the first slide
let currentSlide = 0;
showSlide(currentSlide);

function incrementSlide(numSlidesToChange) {
    let targetSlide = currentSlide + numSlidesToChange;
    if (targetSlide < 0) { targetSlide += NUM_SLIDES; }
    if (targetSlide >= NUM_SLIDES) { targetSlide -= NUM_SLIDES; }
    console.log(targetSlide);
    showSlide(targetSlide);
}

function showSlideFromEvent(event) {
    showSlide(event.target.index);
}

function showSlide(slideNum) {
    let slides = document.querySelectorAll(".slides img");
    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    slides[slideNum].style.display = "initial";
    currentSlide = slideNum;
}