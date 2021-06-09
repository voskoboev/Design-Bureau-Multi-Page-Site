'use strict'

initHeaderSwiper()

// initClientsCarousel() 

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
  const tab1 = document.querySelector('')
  const tab2 = document.querySelector('')
  const tab3 = document.querySelector('')
  const wrapper = document.querySelector('.wrapper')

  const myArr = [box, box1, box2, box3]
  let counter = 0

  function changeTabs(arr) {
    let conditionalCounter = counter === 0 ? arr.length - 1 : counter - 1

    if (counter === arr.length) {
      counter = 0
    }

    arr[counter].classList.add('clients__carousel--active')
    arr[conditionalCounter].classList.remove('clients__carousel--active')
    counter++
  }

  let timer = setInterval(changeTabs, 1200, myArr)

  wrapper.onmouseover = () => {
    clearInterval(timer)
  }

  wrapper.onmouseout = () => {
    timer = setInterval(changeTabs, 1200, myArr)
  }
}

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
