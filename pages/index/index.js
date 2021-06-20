'use strict'
initHeaderSwiper()
manageVideo()


toggleNewsAccordionTabs()

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
    },

    // allowSlidePrev: false,
    // breakpoints: {
    //   970: {
    //     slidesPerView: 2,
    //     spaceBetween: 36,
    //   },
    //   1280: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //   }
    // }

  });
}

function initClientsCarousel() {
  const tab1 = document.querySelector('.clients__carousel-slide--first')
  const tab2 = document.querySelector('.clients__carousel-slide--second')
  // const tab3 = document.querySelector('')
  const wrapper = document.querySelector('.clients__carousel')

  const arrowLeft = document.querySelector('.clients__arrow--left')
  const arrowRight = document.querySelector('.clients__arrow--right')

  const myArr = [tab1, tab2]
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

  setTimeout(changeTabs, 700, myArr)

  let timer = setInterval(changeTabs, 2000, myArr)

  wrapper.addEventListener('mouseenter', () => {
    clearInterval(timer)
  })

  wrapper.addEventListener('mouseleave', () => {
    timer = setInterval(changeTabs, 2000, myArr)
  })

  // arrowLeft.addEventListener('click', () => {
  //   clearInterval(timer)
  //   timer = setInterval(changeTabs, 2000, myArr)
  // })

  // arrowRight.addEventListener('click', () => {
  //   ++counter
  // })
}

initClientsCarousel()






function toggleNewsAccordionTabs() {
  const tabsUppers = document.querySelectorAll('.news__accordion-tab-upper')
  const slideDownClass = 'news__accordion-tab--slide-down'
  const slideUpClass = 'news__accordion-tab--slide-up'
  const btnActivationClass = 'news__accordion-arrow--active'

  tabsUppers.forEach(el => {
    el.onclick = () => {
      const lowerClassList = el.nextElementSibling.classList
      const btnArrowClassList = el.lastElementChild.firstElementChild.classList

      if (!lowerClassList.contains(slideDownClass)) {
        lowerClassList.remove(slideUpClass)
        lowerClassList.add(slideDownClass)
      } else {
        lowerClassList.remove(slideDownClass)
        lowerClassList.add(slideUpClass)
      }

      if (btnArrowClassList.contains(btnActivationClass)) {
        btnArrowClassList.remove(btnActivationClass)
      } else {
        btnArrowClassList.add(btnActivationClass)
      }
    }
  })
}


const showPopupSections = () => {
  const
    portfolio = 'portfolio',
    services = 'services',
    trends = 'trends',
    clients = 'clients',
    news = 'news',
    brands = 'brands'

  // footer = 'footer'
  // header = 'header',

  const showSections = sectionName => {
    const sectionNode = document.querySelector(`.${sectionName}`)

    const
      sectionCoords = sectionNode.getBoundingClientRect().top + window.pageYOffset,
      upperOffsetWindow = window.pageYOffset,
      windowHeingt = window.innerHeight

    if (sectionCoords < upperOffsetWindow + windowHeingt) {
      sectionNode.classList.add(`${sectionName}--active`)
    }
  }

  showSections(portfolio)
  showSections(services)
  showSections(trends)
  showSections(clients)
  showSections(news)
  showSections(brands)
}

window.onscroll = () => {
  showPopupSections()

  // manageNumberIncrement()
  // showBtnToTopOnScroll(document.querySelector('.services'))
}




function manageVideo() {
  const
    video = document.querySelector('.trends__video'),
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
    item.onclick = ev => {
      ev.preventDefault()
      playVideo()
    }
  })
}

function manageFnsOnScroll() {
  let calledOnce = false

  const manageNumberIncrement = () => {
    const numberEl = document.querySelector('.trends__lower-number')

    const
      sectionCoords = numberEl.getBoundingClientRect().top + window.pageYOffset,
      upperOffsetWindow = window.pageYOffset,
      windowHeingt = window.innerHeight

    let startNum = 0
    const elEndNum = 14

    const incrementNums = (endNum, htmlElem) => {
      if (startNum > endNum) return
      htmlElem.textContent = startNum++
    }

    if (sectionCoords < upperOffsetWindow + windowHeingt) {
      if (!calledOnce) {
        setTimeout(() => {
          setInterval(incrementNums, 100, elEndNum, numberEl)
        }, 200)

        calledOnce = true
      }
    }
  }

  window.addEventListener('scroll', manageNumberIncrement)
}

manageFnsOnScroll()
