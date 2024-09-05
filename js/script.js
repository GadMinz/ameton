document.addEventListener("DOMContentLoaded", () => {
  const faqSlider = new Swiper(".faq-slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      590: {
        slidesPerView: 2,
      },
      894: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  });
});
