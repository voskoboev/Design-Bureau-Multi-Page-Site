import { toggleMobileMenu } from '../../common.blocks/header-upper/header-upper'
import { showSectionOnLoad } from "../../ancillary.scripts/ancillary-srcipts"

toggleMobileMenu()
showSectionOnLoad('news')

toggleGalleryTabs()

function toggleGalleryTabs() {
  const menuItemAll = document.querySelector('.news__menu-item--all'),
    menuItemExterior = document.querySelector('.news__menu-item--exterior'),
    menuItemInterior = document.querySelector('.news__menu-item--interior'),
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

// window.addEventListener('scroll', () => {
//   showBtnToTopOnScroll(document.querySelector('.footer'))
// })

