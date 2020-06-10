let slideIndex = 1;
let currentSlide = 0;

const slidesFirstBlock = document.querySelector(".slider__block--first");

const slidesSecondBlock = document.querySelectorAll(
  ".slider__block--second .slider__item"
);

const buttonLeft = document.querySelector(".button-arrow--left");
const buttonRight = document.querySelector(".button-arrow--right");

const showSlides = function (n) {
  if (n < 1) {
    slideIndex = slidesSecondBlock.length;
  } else if (n > slidesSecondBlock.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < slidesSecondBlock.length; i++) {
    slidesSecondBlock[i].classList.remove("slider__item--active");
  }

  slidesSecondBlock[slideIndex - 1].classList.add("slider__item--active");
};

const plusSlides = function (n) {
  showSlides((slideIndex += n));
};

const slideBlockReplace = function (slideBlockIn, slideBlockOut, slide) {
  slideBlockIn.innerHTML = "";
  slideBlockIn.append(slideBlockOut[slide].cloneNode(true));
};

buttonRight.addEventListener("click", function () {
  if (currentSlide < slidesSecondBlock.length) {
    slideBlockReplace(slidesFirstBlock, slidesSecondBlock, currentSlide);
    currentSlide++;
  } else {
    currentSlide = 0;
    slideBlockReplace(slidesFirstBlock, slidesSecondBlock, currentSlide);
    currentSlide++;
  }

  plusSlides(1);
});
buttonLeft.addEventListener("click", function () {
  if (currentSlide < 1) {
    slideBlockReplace(slidesFirstBlock, slidesSecondBlock, currentSlide);
    currentSlide = slidesSecondBlock.length - 1;
    console.log(currentSlide);
  } else if (currentSlide >= slidesSecondBlock.length) {
    currentSlide = 0;
    slideBlockReplace(slidesFirstBlock, slidesSecondBlock, currentSlide);
    currentSlide = slidesSecondBlock.length - 1;
  } else {
    slideBlockReplace(slidesFirstBlock, slidesSecondBlock, currentSlide);
    currentSlide--;
  }

  plusSlides(-1);
});
