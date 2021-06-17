'use strict'

scrollToTopOnBtnClick()

/* 
This fn is called in concrete js file for every page because of
neccessity of calling scroll fns in one page scroll handler.
*/
function showBtnToTopOnScroll(appearancePoint) {
  const btn = document.querySelector('.btn-to-top')
  const offset = window.pageYOffset + window.innerHeight
  const position = appearancePoint.getBoundingClientRect().top + window.pageYOffset

  if (position < offset) {
    btn.classList.add('btn-to-top--active')
  } else {
    btn.classList.remove('btn-to-top--active')
  }
}

function scrollToTopOnBtnClick() {
  const btn = document.querySelector('.btn-to-top')

  btn.onclick = () => {
    scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
}

