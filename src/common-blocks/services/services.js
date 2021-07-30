'use strict'

toggleServicesAccordionTabs()

function toggleServicesAccordionTabs() {
  const upperItems = document.querySelectorAll('.services__list-item-upper')
  const slideActivationClass = 'services__list-item-lower--active'
  const arrowActivationClass = 'services__list-item-btn-down-arrow--active'
  const btnActivationClass = 'services__list-item-btn--active'

  upperItems.forEach(item => {
    item.addEventListener('click', () => {
      item.nextElementSibling.classList.toggle(slideActivationClass)
      item.lastElementChild.classList.toggle(btnActivationClass)
      item.lastElementChild.children[0].classList.toggle(arrowActivationClass)
    })
  })
}


