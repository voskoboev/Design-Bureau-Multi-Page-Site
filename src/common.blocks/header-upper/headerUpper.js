export function toggleMobileMenu() {
  const body = document.querySelector('body'),
    btnOpen = document.querySelector('.header__mobile-btn--open'),
    btnClose = document.querySelector('.header__mobile-btn--close'),
    nav = document.querySelector('.header__nav')

  btnOpen.addEventListener('click', () => {
    nav.classList.add('header__nav--active')
    nav.classList.remove('header__nav--inactive')
    body.classList.add('body--inactive')
  })

  btnClose.addEventListener('click', () => {
    nav.classList.add('header__nav--inactive')
    nav.classList.remove('header__nav--active')
    body.classList.remove('body--inactive')
  })
}
