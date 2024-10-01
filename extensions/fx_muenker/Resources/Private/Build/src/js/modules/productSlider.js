// src/js/modules/productSlider.js
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initSliders() {
  initProductSlider();
  initGeneralSlider();
}

function initProductSlider() {
  const productSlider = document.getElementById('productSlider');
  if (productSlider) {
    productSlider.style.display = 'block';
    new Swiper(productSlider, {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 15000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30
        }
      }
    });
  }
}

function initGeneralSlider() {
  const generalSlider = document.querySelector('.swiper');
  if (generalSlider) {
    new Swiper(generalSlider, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }
}