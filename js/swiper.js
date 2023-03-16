// ******** swiper version 9

// const swiperEl = document.querySelector('swiper-container');
// const swiperParams = {
//   slidesPerView: 1,
//   pagination: {
//     clickable: true
//    },

//   breakpoints: {
//     1200: {},
//   },
// };

// Object.assign(swiperEl, swiperParams);
// swiperEl.initialize();
// *********


// *** swiper version 8   ***
const swiperDoublePagin = new Swiper('.subheader-swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  breakpoints: {
    992: {
      noSwiping: true,
    }
  },
  // autoplay: {
  //   delay: 3000,
  //   pauseOnMouseEnter: true,
  //   disableOnInteraction: false,
  // },
  speed: 500,
  lazy: true,
  breakpoints: {
    992: {
      noSwiping: true,
    }
  },
  pagination: {
    el: '.swiper-pos-white',
    clickable: true,
    type: 'bullets'
  },
});

const subheaderSwiper = new Swiper('.subheader-swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination2',
    type: 'fraction'
  },
});

let delaySwiper = swiperDoublePagin.autoplay.delay
setInterval(() => {
  let swiperPaginationcurrent = document.querySelector('.swiper-pagination-current')
  let subheaderSwiperSlide = document.querySelectorAll('.subheader-swiper .swiper-slide')
  subheaderSwiperSlide.forEach((el,idx) => {
    if (el.classList.contains('swiper-slide-active')) {
      swiperPaginationcurrent.textContent = idx + 1
    }  
  });
}, delaySwiper)


const swiperPromo = new Swiper('.swiper-promo', {
  slidesPerView: 4,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
  paginationClickable: true,
  spaceBetween: 30,  
})

const swiperMainPart1 = new Swiper('.swiper-main-part-1',{
  slidesPerView: 4,
  // pagination: true,
  clickable: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
})

const swiperMainPart2 = new Swiper('.swiper-main-part-2', {
  slidesPerView: 3,
  pagination: true,
  clickable: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
}) 
