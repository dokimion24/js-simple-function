const $ = (selector) => {
  return document.querySelector(selector);
};
const arr = ["0vw", "-100vw", "-200vw"];
let idx = 0;
$(".slide-container").children[idx].scrollIntoView({
  length: "smooth",
});
$(".before").addEventListener("click", () => {
  $(".slide-container").style.transform = `translateX(${
    arr[--idx % arr.length]
  })`;
});
$(".next").addEventListener("click", () => {
  $(".slide-container").style.transform = `translateX(${
    arr[++idx % arr.length]
  })`;
});
