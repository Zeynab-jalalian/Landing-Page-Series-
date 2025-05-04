//Swiper 
// create thumbs swiper
let thumbsSwiper = new Swiper('.thumbsSwiper', {
  spaceBetween: 10,
  slidesPerView: 5,
  breakpoints: {
    200: {
      slidePreView: 1.5
    },
    400: {
      slidePreView: 1.5
    },
    600: {
      slidePreView: 3
    },
    1100: {
      slidePreView: 5
    },
  },
  freeMode: true,
  watchSlidesProgress: true,
});


const swiper = new Swiper('.bannerSwiper', {
  spaceBetween: 0,
  effect: "fade",
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //make thumbs slider 
  thumbs: {
    swiper: thumbsSwiper
  }

});