import Swiper, { Navigation, Pagination } from 'swiper'
import { toggleMobileMenu } from '../../common.blocks/header-upper/headerUpper'
import { toggleServicesAccordionTabs } from '../../common.blocks/services/services'
import {
  manageVideo,
  showPopupSections
} from '../../ancillary.scripts/ancillarySrcipts'
import {
  showBtnToTopOnScroll,
  scrollToTopOnBtnClick
} from '../../common.blocks/btn-to-top/btnToTop'

initHeaderSwiper()
toggleMobileMenu()
toggleServicesAccordionTabs()
manageVideo('trends')
showPopupSections('portfolio')
showPopupSections('services__wrapper')
showPopupSections('trends')
showPopupSections('clients')
showPopupSections('news__container')
showPopupSections('brands')
showBtnToTopOnScroll('.portfolio')
scrollToTopOnBtnClick('.portfolio')

manageNumberIncrement()
initClientsCarousel()
toggleNewsAccordionTabs()

function initHeaderSwiper() {
  const slider = document.querySelector('.swiper-container')

  Swiper.use([Navigation])
  Swiper.use([Pagination])

  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(slider, {
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    slideClass: 'swiper-slide',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    }
  })
}

function manageNumberIncrement() {
  let calledOnce = false

  const startNumberIncrement = () => {
    const numberElem = document.querySelector('.trends__lower-number'),
      sectionCoords =
        numberElem.getBoundingClientRect().top + window.pageYOffset,
      upperOffsetWindow = window.pageYOffset,
      windowHeight = window.innerHeight,
      startInterval = 50,
      timeOutInterval = 200,
      endNum = 14

    let startNum = 0

    const incrementNums = (endNum, htmlElem) => {
      if (startNum > endNum) return
      htmlElem.textContent = startNum++
    }

    if (sectionCoords < upperOffsetWindow + windowHeight) {
      if (!calledOnce) {
        setTimeout(() => {
          setInterval(incrementNums, startInterval, endNum, numberElem)
        }, timeOutInterval)

        calledOnce = true
      }
    }
  }

  window.addEventListener('scroll', startNumberIncrement)
}

function initClientsCarousel() {
  const tab1 = document.querySelector('.clients__carousel-slide--1'),
    tab2 = document.querySelector('.clients__carousel-slide--2'),
    wrapper = document.querySelector('.clients__carousel'),
    tabsArr = [tab1, tab2],
    timeOutInterval = 700,
    changeTabsInterval = 2000

  let counter = 0

  function changeTabs(arr) {
    const conditionalCounter = counter === 0 ? arr.length - 1 : counter - 1

    if (counter === arr.length) {
      counter = 0
    }

    arr[counter].classList.add('clients__carousel-slide--active')
    arr[conditionalCounter].classList.remove('clients__carousel-slide--active')
    counter++
  }

  setTimeout(changeTabs, timeOutInterval, tabsArr)

  let timer = setInterval(changeTabs, changeTabsInterval, tabsArr)

  wrapper.addEventListener('mouseenter', () => {
    clearInterval(timer)
  })

  wrapper.addEventListener('mouseleave', () => {
    timer = setInterval(changeTabs, changeTabsInterval, tabsArr)
  })
}

function toggleNewsAccordionTabs() {
  const upperItems = document.querySelectorAll('.news__accordion-tab-upper'),
    slideActivationClass = 'news__accordion-tab-lower--active',
    arrowActivationClass = 'news__accordion-arrow--active'

  upperItems.forEach(item => {
    item.addEventListener('click', () => {
      item.nextElementSibling.classList.toggle(slideActivationClass)
      item.lastElementChild.firstElementChild.classList.toggle(
        arrowActivationClass
      )
    })
  })
}
