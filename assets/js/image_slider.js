// starting index of each slider
var indexes = {
    firstSliderIndex: 1,
    secondSliderIndex: 1,
    thirdSliderIndex: 1,
    fourthSliderIndex: 1,
    fiveSliderIndex: 1,
    sixSliderIndex: 1,
    sevenSliderIndex: 1,
    // eightSliderIndex: 1,
    // nineSliderIndex: 1,
    tenSliderIndex: 1,
};

showSlides(indexes.firstSliderIndex, 'first', 'firstSliderIndex');
showSlides(indexes.secondSliderIndex, 'second', 'secondSliderIndex');
showSlides(indexes.thirdSliderIndex, 'third', 'thirdSliderIndex');
showSlides(indexes.fourthSliderIndex, 'fourth', 'fourthSliderIndex');
showSlides(indexes.fiveSliderIndex, 'five', 'fiveSliderIndex');
showSlides(indexes.sixSliderIndex, 'six', 'sixSliderIndex');
showSlides(indexes.sevenSliderIndex, 'seven', 'sevenSliderIndex');
// showSlides(indexes.eightSliderIndex, 'eight', 'eightSliderIndex');
// showSlides(indexes.nineSliderIndex, 'nine', 'nineSliderIndex');
showSlides(indexes.tenSliderIndex, 'ten', 'tenSliderIndex');

// Next/previous controls
function plusSlides(n, id, index) { // n - number of slide, id - container id, index - current slide number in slider
    showSlides(indexes[index] += n, id, index);
}
// Thumbnail image controls
function currentSlide(n, id, index) {
    showSlides(indexes[index] = n, id, index);
}

function showSlides(n, id, index) {
    var i;
    var slides = document.querySelectorAll(`#${id} .mySlides`);
    var dots = document.querySelectorAll(`#${id} .dot`);
    if (n > slides.length) {
        indexes[index] = 1;
    }
    if (n < 1) {indexes[index] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[indexes[index]-1].style.display = "block";
    dots[indexes[index]-1].className += " active";
}
