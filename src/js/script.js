//Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  //   console.log(window.pageYOffset);
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// swiper populer categories
var swiper = new Swiper(".mySwiperPopuler", {
  grabCursor: false,
  spaceBetween: 20,
  centeredSlides: false,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".navigate-right",
    prevEl: ".navigate-left",
  },
});
