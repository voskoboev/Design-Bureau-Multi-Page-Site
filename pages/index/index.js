'use strict'

initHeaderSwiper()

function initHeaderSwiper() {
  const slider = document.querySelector('.swiper-container')

  const mySwiper = new Swiper(slider, {
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