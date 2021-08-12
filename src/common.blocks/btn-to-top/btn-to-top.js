export function showBtnToTopOnScroll(appearancePoint) {
  const btn = document.querySelector('.btn-to-top'),
    point = document.querySelector(appearancePoint),
    offset = window.pageYOffset + window.innerHeight,
    position = point.getBoundingClientRect().top + window.pageYOffset

  if (position < offset) {
    btn.classList.add('btn-to-top--active')
  } else {
    btn.classList.remove('btn-to-top--active')
  }
}

export function scrollToTopOnBtnClick(appearancePoint) {
  const btn = document.querySelector('.btn-to-top')

  btn.addEventListener('click', () => {
    scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  window.addEventListener('scroll', () => {
    showBtnToTopOnScroll(appearancePoint)
  })
}
