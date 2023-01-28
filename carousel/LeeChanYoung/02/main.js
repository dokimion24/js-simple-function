let sliderContainer = document.querySelector(".slider-container");
let innerSlider = document.querySelector(".inner-slider");

let startX;
let x;
let pressed = false;

sliderContainer.addEventListener("mousedown", (e) => {
  pressed = true;

  startX = e.offsetX - innerSlider.offsetLeft;
  let outer = sliderContainer.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();


  sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;
  innerSlider.style.left = `${x - startX}px`;
});

sliderContainer.addEventListener("mouseenter", () => {
  sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseup", () => {
  checkBoundary();
  pressed = false;
  sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseleave", () => {
  checkBoundary();
  pressed = false;
  sliderContainer.style.cursor = "grab";
});

const checkBoundary = () => {
  let outer = sliderContainer.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  const itemWidth = inner.width / 6;
  let dragWidth = 0;
  dragWidth += startX - x;

  // if (parseInt(innerSlider.style.left) > 0) {
  //   innerSlider.style.left = "0px";
  // }

  if (dragWidth < 0) {
    innerSlider.style.left = `0px`;
    dragWidth = 0;
  } else if (dragWidth < itemWidth) {
    innerSlider.style.left = `-${itemWidth}px`;
    dragWidth = itemWidth;
  } else if (dragWidth < itemWidth * 2) {
    innerSlider.style.left = `-${itemWidth * 2}px`;
    dragWidth = itemWidth * 2;
  } else if (dragWidth < itemWidth * 3) {
    innerSlider.style.left = `-${itemWidth * 3}px`;
    dragWidth = itemWidth * 3;
  } else if (dragWidth < itemWidth * 4) {
    innerSlider.style.left = `-${itemWidth * 4}px`;
    dragWidth = itemWidth * 4;
  } else if (dragWidth < itemWidth * 5) {
    innerSlider.style.left = `-${itemWidth * 5}px`;
    dragWidth = itemWidth * 5;
  } else if (dragWidth < itemWidth * 6) {
    innerSlider.style.left = `-${itemWidth * 6}px`;
    dragWidth = itemWidth * 6;
  }

  console.log(dragWidth);
  // else if (dragWidth < itemWidth * 3) {
  //   innerSlider.style.left = `-${itemWidth * 3}px`;
  // } else if (dragWidth < itemWidth * 4) {
  //   innerSlider.style.left = `-${itemWidth * 4}px`;
  // } else if (dragWidth < itemWidth * 5) {
  //   innerSlider.style.left = `-${itemWidth * 5}px`;
  // } else if (dragWidth < itemWidth * 6) {
  //   innerSlider.style.left = `-${itemWidth * 6}px`;
  // }

  // } else if (itemWidth * 2 < dragWidth) {
  //   innerSlider.style.left = `${itemWidth * 2}px`;
  // } else if (itemWidth * 3 < dragWidth) {
  //   innerSlider.style.left = `${itemWidth * 3}px`;
};

// if (inner.right < outer.right) {
//   innerSlider.style.left = `-${inner.width - outer.width}px`;
// }
