let copyright = document.querySelector('.copyright-year');
copyright.innerHTML =  new Date().getFullYear();

const mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next--custom',
    prevEl: '.swiper-button-prev--custom',
  },
  pagination: {
    el: '.swiper-pagination',
  }
})