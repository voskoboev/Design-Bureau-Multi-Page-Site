'use strict'

showPopupSections()
initHeaderSwiper()
manageVideo()
manageNumberIncrement()
initClientsCarousel()
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
    }
  })
}

function initClientsCarousel() {
  const tab1 = document.querySelector('.clients__carousel-slide--first')
  const tab2 = document.querySelector('.clients__carousel-slide--second')
  // const tab3 = document.querySelector('')
  const wrapper = document.querySelector('.clients__carousel')

  // const arrowLeft = document.querySelector('.clients__arrow--left')
  // const arrowRight = document.querySelector('.clients__arrow--right')

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

function showPopupSections() {
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
      windowHeight = window.innerHeight

    if (sectionCoords < upperOffsetWindow + windowHeight) {
      sectionNode.classList.add(`${sectionName}--active`)
    }
  }

  window.addEventListener('scroll', () => {
    showSections(portfolio)
    showSections(services)
    showSections(trends)
    showSections(clients)
    showSections(news)
    showSections(brands)
  })
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
    item.addEventListener('click', ev => {
      ev.preventDefault()
      playVideo()
    })
  })
}

function manageNumberIncrement() {
  let calledOnce = false

  const startNumberIncrement = () => {
    const
      numberEl = document.querySelector('.trends__lower-number'),
      sectionCoords = numberEl.getBoundingClientRect().top + window.pageYOffset,
      upperOffsetWindow = window.pageYOffset,
      windowHeight = window.innerHeight

    let startNum = 0
    const elEndNum = 14

    const incrementNums = (endNum, htmlElem) => {
      if (startNum > endNum) return
      htmlElem.textContent = startNum++
    }

    if (sectionCoords < upperOffsetWindow + windowHeight) {
      if (!calledOnce) {
        setTimeout(() => {
          setInterval(incrementNums, 100, elEndNum, numberEl)
        }, 200)

        calledOnce = true
      }
    }
  }

  window.addEventListener('scroll', startNumberIncrement)
}

function toggleNewsAccordionTabs() {
  const upperItems = document.querySelectorAll('.news__accordion-tab-upper')
  const slideActivationClass = 'news__accordion-tab-lower--active'
  const arrowActivationClass = 'news__accordion-arrow--active'

  upperItems.forEach(item => {
    item.addEventListener('click', () => {
      item.nextElementSibling.classList.toggle(slideActivationClass)
      item.lastElementChild.firstElementChild.classList.toggle(arrowActivationClass)
    })
  })
}
