/*function makeSliderShow(slidesId){
    const slides=document.getElementById("slides")
    const slidesInner=slides.querySelector(".slides-inner")
    const images=slidesInner.querySelectorAll("img")


    let index=0;

    setInterval(function () {
        index+=1

        if (index===images.length){
            index=0

        }
slidesInner.style.transform=`translate3d(${index* 5000}px,0,0)`

    },3000)

}

makeSliderShow("slides");

*/


/*const slides = document.querySelectorAll(".image-to-show");
let slideIndex = 1;
let timerId;
autoSlider();
showSlide(slideIndex)

/*function showSlide(n) {

    if (n > slides.length){
        slideIndex = 1;
        slides.classList.remove("active")

    }
    if (n<1){
        slideIndex=slides.length
        slides.classList.add("active")
    }



    plusSlides(n);

};

function plusSlides(n){
    showSlide(slideIndex+=n);
}

function autoSlider() {
    timerId = setTimeout(showSlide, 3000);

}*/
/*slides[currentElem].className = "image-to-show";
if (currentElem === 0) {
    currentElem = 3;
    slides[currentElem].className = "image-to-show active";*/
/*let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName(".images-wrapper");
    let dots = document.getElementsByClassName(".image-to-show");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].classList.add("image-to-show.active")
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/








/*let titleOne = document.querySelectorAll(".image-to-show");
let contentElem = document.querySelectorAll(".images-wrapper");
let target;
let currentElem=0
let timerId;
autoSlider()


titleOne.forEach(function (elem) {
        titleOne.forEach((elem) => {
            elem.classList.remove("active");
        });
        elem.classList.add("active");
        currentElem++;
       /* changeAboutContent(target);
    });

function autoSlider() {
    timerId = setTimeout(changeAboutContent, 3000)};

function changeAboutContent(target) {
    contentElem.forEach((e) => {
        if (e.classList.contains("active")){
            e.classList.remove("active");
        } else e.classList.add("active");
    });
}
*/







/*.slides-inner{
    display: flex;
    flex-direction: row;
    position: absolute;
    transition: 1000ms;
}

.slide-show{
    overflow: hidden;
    position: relative;
}


#slides{
    border: 2px solid darkslategrey;
    width: 1000px;
    height: 1000px;

}*/













