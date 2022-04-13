// Инициализируем Swiper
new Swiper('.swiper', {
  //Стрелки
  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
  },    
  slidesPerView: 4,
  slidesPerGroup: 2,
  watchOverflow: true,
  spaceBetween: 20,
  loop: true,  

  breakpoints: {
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 3,
    },
    1000: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  }
});