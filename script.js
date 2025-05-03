//Swiper 
const swiper = new Swiper('.bannerSwiper', {
    spaceBetween:0,
    effect:"fade",  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });