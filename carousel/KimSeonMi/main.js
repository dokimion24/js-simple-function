const activeClass =  '_active'
const opacityClass =  '_opacity'

const slidesEls = document.querySelectorAll('.slide_item')
const arrSlidesEls = Array.from(slidesEls)
const rigthEl = document.querySelector('.right')
const leftEl = document.querySelector('.left')
console.log(arrSlidesEls)
let curIndex = 0

const moveRigthSlide = () => {
  arrSlidesEls[curIndex].classList.remove(activeClass)
  
  if(curIndex < arrSlidesEls.length - 1){
    curIndex++
  }else{
    curIndex = 0
  }
  arrSlidesEls[curIndex].classList.add(activeClass)
}
const moveLeftSlide = () => {
  
  arrSlidesEls[curIndex].classList.remove(activeClass)
  
  if(curIndex > 0){
    curIndex--
  }else{
    curIndex = arrSlidesEls.length - 1
  }
  arrSlidesEls[curIndex].classList.add(activeClass)
}

rigthEl.addEventListener('click', moveRigthSlide)
leftEl.addEventListener('click', moveLeftSlide)