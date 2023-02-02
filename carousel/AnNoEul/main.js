const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

btn1.addEventListener('click', function() {
  document.querySelector('.slide-container').style.transform='translate(0)'
})
btn2.addEventListener('click', function() {
  document.querySelector('.slide-container').style.transform='translateX(-100vw)'
})
btn3.addEventListener('click', function() {
  document.querySelector('.slide-container').style.transform='translateX(-200vw)'
})