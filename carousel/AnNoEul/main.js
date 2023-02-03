const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgEl = document.querySelector(".slide-box img");

btn1.addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform = "translate(0)";
});
btn2.addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform =
    "translateX(-100vw)";
});
btn3.addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform =
    "translateX(-200vw)";
});
// prev.addEventListener("click", function () {
//   for (let i = 0; i < imgEl.length; i++) {
//     document.querySelector(".slide-container").style.transform =
//       "translateX(-200vw)";
//   }
// });
