//swiper 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // Solo una imagen visible
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active'); 
} 

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active'); 
}