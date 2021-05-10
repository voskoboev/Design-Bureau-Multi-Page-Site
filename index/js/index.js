'use strict';

initSwiper();

function initSwiper() {
  const slider = document.querySelector('.swiper-container');

  const mySwiper = new Swiper(slider, {
    // speed: 400,
    spaceBetween: 50,
    // initialSlide: 1,
    slidesPerView: 3,
    // loop: true,
    // slideClass: 'swiper-slide',
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    // },
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