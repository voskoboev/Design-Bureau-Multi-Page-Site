import { toggleMobileMenu } from '../../common.blocks/header-upper/header-upper'
import { showSectionOnLoad } from '../../ancillary.scripts/ancillary-srcipts'
import {
  showBtnToTopOnScroll,
  scrollToTopOnBtnClick
} from '../../common.blocks/btn-to-top/btn-to-top'

toggleMobileMenu()
showSectionOnLoad('news')
showSectionOnLoad('header__lower')
showBtnToTopOnScroll('.footer')
scrollToTopOnBtnClick('.footer')

toggleGalleryTabs()

function toggleGalleryTabs() {
  const menuItemAll = document.querySelector('.news__menu-item--all'),
    menuItemExterior = document.querySelector('.news__menu-item--exterior'),
    menuItemInterior = document.querySelector('.news__menu-item--interior'),
    galleryItemsAll = document.querySelectorAll('.news__card'),
    galleryItemsExterior = document.querySelectorAll(`
      .news__card--2, 
      .news__card--4, 
      .news__card--7
      `),
    galleryItemsInterior = document.querySelectorAll(`
      .news__card--1, 
      .news__card--3,
      .news__card--5, 
      .news__card--6, 
      .news__card--8, 
      .news__card--9
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
