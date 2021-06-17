'use strict'

toggleGalleryTabs()

showSectionOnLoad('news')

function showSectionOnLoad(sectionName) {
  window.onload = () => {
    const section = document.querySelector(`.${sectionName}`)

    section.classList.add(`${sectionName}--active`)
  }
}

function toggleGalleryTabs() {
  const
    menuItemAll = document.querySelector('.news__menu-item--all'),
    menuItemExterior = document.querySelector('.news__menu-item--exterior'),
    menuItemInterior = document.querySelector('.news__menu-item--interior')

  const
    galleryItemsAll = document.querySelectorAll('.news__card'),
    galleryItemsExterior = document.querySelectorAll(`
      .news__card--second, 
      .news__card--fourth, 
      .news__card--seventh
      `),
    galleryItemsInterior = document.querySelectorAll(`
      .news__card--first, 
      .news__card--third,
      .news__card--fifth, 
      .news__card--sixth, 
      .news__card--eighth, 
      .news__card--nineth
     `)

  const toggleCards = (menuItem, galleryItems, allGalleryItems) => {
    menuItem.onclick = () => {
      allGalleryItems.forEach(item => {
        item.style.display = 'none'
      })

      galleryItems.forEach(item => {
        item.style.display = 'block'
      })
    }
  }

  toggleCards(menuItemAll, galleryItemsAll, galleryItemsAll)
  toggleCards(menuItemExterior, galleryItemsExterior, galleryItemsAll)
  toggleCards(menuItemInterior, galleryItemsInterior, galleryItemsAll)
}

window.onscroll = () => {
  showBtnToTopOnScroll(document.querySelector('.footer'))
}
