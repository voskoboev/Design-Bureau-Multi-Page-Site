import { toggleMobileMenu } from '../../common.blocks/header-upper/headerUpper'
import { showSectionOnLoad } from '../../ancillary.scripts/ancillarySrcipts'
import {
  showBtnToTopOnScroll,
  scrollToTopOnBtnClick
} from '../../common.blocks/btn-to-top/btnToTop'

toggleMobileMenu()
showSectionOnLoad('header__lower')
showSectionOnLoad('projects')
showBtnToTopOnScroll('.footer')
scrollToTopOnBtnClick('.footer')

toggleGalleryCards()

function toggleGalleryCards() {
  const allMenuItems = document.querySelectorAll('.projects__menu-item'),
    menuItemAll = document.querySelector('.projects__menu-item--all'),
    menuItemExterior = document.querySelector('.projects__menu-item--exterior'),
    menuItemInterior = document.querySelector('.projects__menu-item--interior'),
    galleryItemsAll = document.querySelectorAll('.projects__card'),
    galleryItemsExterior = document.querySelectorAll(`
      .projects__card--3, 
      .projects__card--5, 
      .projects__card--6,
      .projects__card--7
      `),
    galleryItemsInterior = document.querySelectorAll(`
      .projects__card--1, 
      .projects__card--2,
      .projects__card--4, 
      .projects__card--8, 
      .projects__card--9
     `),
    galleryItemThird = document.querySelector('.projects__card--3'),
    galleryItemFourth = document.querySelector('.projects__card--4'),
    galleryItemNineth = document.querySelector('.projects__card--9')

  function toggleCards(
    menuItem,
    galleryItems,
    allGalleryItems,
    ...specialCards
  ) {
    function assignInitialPropsValues(
      specialCardFirst,
      specialCardSecond,
      specialCardThird
    ) {
      specialCardFirst.style.gridRow = '1 / 3'
      specialCardFirst.style.gridColumn = '3 / 3'

      specialCardSecond.style.gridRow = '2 / 4'
      specialCardSecond.style.gridColumn = '1 / 1'

      specialCardThird.style.gridRow = '4 / 4'
      specialCardThird.style.gridColumn = '2 / 4'
    }

    menuItem.addEventListener('click', () => {
      allGalleryItems.forEach(item => {
        item.style.display = 'none'
      })

      galleryItems.forEach(item => {
        if (window.innerWidth > 1024) {
          if (galleryItems === allGalleryItems) {
            assignInitialPropsValues(
              specialCards[0],
              specialCards[1],
              specialCards[2]
            )
            item.style.display = 'block'
            return
          }
        }

        item.style.gridRow = 'auto'
        item.style.gridColumn = 'auto'
        item.style.display = 'block'
      })

      allMenuItems.forEach(item => {
        item.style.color = '#000'
      })

      menuItem.style.color = '#f27935'
    })
  }

  toggleCards(
    menuItemAll,
    galleryItemsAll,
    galleryItemsAll,
    galleryItemThird,
    galleryItemFourth,
    galleryItemNineth
  )
  toggleCards(
    menuItemExterior,
    galleryItemsExterior,
    galleryItemsAll,
    galleryItemThird,
    galleryItemFourth,
    galleryItemNineth
  )
  toggleCards(
    menuItemInterior,
    galleryItemsInterior,
    galleryItemsAll,
    galleryItemThird,
    galleryItemFourth,
    galleryItemNineth
  )
}
