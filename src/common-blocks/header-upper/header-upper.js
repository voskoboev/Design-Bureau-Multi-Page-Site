'use strict'

toggleMobileMenu()

function toggleMobileMenu() {
  const btnOpen = document.querySelector('.header__mobile-btn--open')
  const btnClose = document.querySelector('.header__mobile-btn--close')
  const nav = document.querySelector('.header__nav')

  btnOpen.onclick = function () {
    nav.classList.add('header__nav--active')
    nav.classList.remove('header__nav--inactive')
  }

  btnClose.onclick = function () {
    nav.classList.add('header__nav--inactive')
    nav.classList.remove('header__nav--active')
  }
}