import { toggleMobileMenu } from '../../common.blocks/header-upper/header-upper'

toggleMobileMenu()
toggleGalleryCards()

function toggleGalleryCards() {
  const menuItemAll = document.querySelector('.projects__menu-item--all'),
    menuItemExterior = document.querySelector('.projects__menu-item--exterior'),
    menuItemInterior = document.querySelector('.projects__menu-item--interior'),
    galleryItemsAll = document.querySelectorAll('.projects__card'),
    galleryItemsExterior = document.querySelectorAll(`
      .projects__card--third, 
      .projects__card--fifth, 
      .projects__card--sixth,
      .projects__card--seventh
      `),
    galleryItemsInterior = document.querySelectorAll(`
      .projects__card--first, 
      .projects__card--second,
      .projects__card--fourth, 
      .projects__card--eighth, 
      .projects__card--nineth
     `),
    galleryItemThird = document.querySelector('.projects__card--third'),
    galleryItemFourth = document.querySelector('.projects__card--fourth'),
    galleryItemNineth = document.querySelector('.projects__card--nineth')

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

    menuItem.onclick = () => {
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
    }
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
