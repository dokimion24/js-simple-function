let sliderContainer = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner-slider');

let startX;
let x;
let scrollLeft;
let pressed = false;

sliderContainer.addEventListener('mousedown', (e) => {
  pressed = true;
  startX = e.pageX;
  scrollLeft = sliderContainer.scrollLeft;

  sliderContainer.style.cursor = 'grabbing';
});

sliderContainer.addEventListener('mousemove', (e) => {
  if (!pressed) return;
  e.preventDefault();

  const x = e.pageX;
  const scroll = x - startX;
  sliderContainer.scrollLeft = scrollLeft - scroll;

  console.log(scrollLeft, scroll);
  console.log(sliderContainer.scrollLeft);
  // autoSlide();
});

sliderContainer.addEventListener('mouseenter', () => {
  sliderContainer.style.cursor = 'grab';
});

sliderContainer.addEventListener('mouseup', () => {
  pressed = false;
  sliderContainer.style.cursor = 'grab';
});

sliderContainer.addEventListener('mouseleave', () => {
  pressed = false;
  sliderContainer.style.cursor = 'grab';
});

const autoSlide = () => {
  if (0 < sliderContainer.scrollLeft) {
    sliderContainer.scrollLeft = 200;
  }
};
