const activeClass =  '_active'

const slidesEls = document.querySelectorAll('silde_item')
const arrSlidesEls = Array.from(slidesEls)

let curIndex = 0

const moveRigthSlide = () => {
  arrSlidesEls[curIndex].classList.remove(activeClass)
}

