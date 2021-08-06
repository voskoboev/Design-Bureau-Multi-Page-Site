import Swiper from 'swiper'
import { showBtnToTopOnScroll, scrollToTopOnBtnClick  } from '../../common.blocks/btn-to-top/btn-to-top'
import { toggleServicesAccordionTabs } from '../../common.blocks/services/services'
import { toggleMobileMenu } from '../../common.blocks/header-upper/header-upper'

// showBtnToTopOnScroll('.trends') // ?
// scrollToTopOnBtnClick() // ?
toggleServicesAccordionTabs()
toggleMobileMenu()

showPopupSections()
initHeaderSwiper()
manageNumberIncrement()
manageVideo()
initClientsCarousel()
toggleNewsAccordionTabs()

function showPopupSections() {
  const showSections = sectionName => {
    const sectionNode = document.querySelector(`.${sectionName}`),
      sectionCoords = sectionNode.getBoundingClientRect().top + window.pageYOffset,
      upperOffsetWindow = window.pageYOffset,
      windowHeight = window.innerHeight

    if (sectionCoords < upperOffsetWindow + windowHeight) {
      sectionNode.classList.add(`${sectionName}--active`)
    }
  }

  window.addEventListener('scroll', () => {
    showSections('portfolio')
    showSections('services')
    showSections('trends')
    showSections('clients')
    showSections('news')
    showSections('brands')
  })
}

function initHeaderSwiper() {
  const slider = document.querySelector('.swiper-container')

  const swiper = new Swiper(slider, {
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    slideClass: 'swiper-slide',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }
  })
}

function manageNumberIncrement() {
  let calledOnce = false

  const startNumberIncrement = () => {
    const numberEl = document.querySelector('.trends__lower-number'),
      sectionCoords = numberEl.getBoundingClientRect().top + window.pageYOffset,
      upperOffsetWindow = window.pageYOffset,
      windowHeight = window.innerHeight,
      startInterval = 100,
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
          setInterval(incrementNums, startInterval, endNum, numberEl)
        }, timeOutInterval)

        calledOnce = true
      }
    }
  }

  window.addEventListener('scroll', startNumberIncrement)
}

function manageVideo() {
  const video = document.querySelector('.trends__video'),
    playBtn = document.querySelector('.trends__play-btn')

  const playVideo = () => {
    video.play()
    playBtn.classList.add('trends__play-btn--inactive')

    if (video.hasAttribute('controls') === true) {
      return
    }

    video.setAttribute('controls', 'controls')
  }

  [video, playBtn].forEach(item => {
    item.addEventListener('click', ev => {
      ev.preventDefault()
      playVideo()
    })
  })
}

function initClientsCarousel() {
  const tab1 = document.querySelector('.clients__carousel-slide--first'),
    tab2 = document.querySelector('.clients__carousel-slide--second'),
    wrapper = document.querySelector('.clients__carousel'),
    tabsArr = [tab1, tab2],
    timeOutInterval = 700,
    changeTabsInterval = 2000

  // const tab3 = document.querySelector('')
  // const arrowLeft = document.querySelector('.clients__arrow--left')
  // const arrowRight = document.querySelector('.clients__arrow--right')

  let counter = 0

  function changeTabs(arr) {
    let conditionalCounter = counter === 0 ? arr.length - 1 : counter - 1

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

  // arrowLeft.addEventListener('click', () => {
  //   clearInterval(timer)
  //   timer = setInterval(changeTabs, 2000, tabsArr)
  // })

  // arrowRight.addEventListener('click', () => {
  //   ++counter
  // })
}


function toggleNewsAccordionTabs() {
  const upperItems = document.querySelectorAll('.news__accordion-tab-upper'),
    slideActivationClass = 'news__accordion-tab-lower--active',
    arrowActivationClass = 'news__accordion-arrow--active'

  upperItems.forEach(item => {
    item.addEventListener('click', () => {
      item
        .nextElementSibling
        .classList
        .toggle(slideActivationClass)
      item
        .lastElementChild
        .firstElementChild
        .classList
        .toggle(arrowActivationClass)
    })
  })
}
