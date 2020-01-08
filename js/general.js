const menuIcon = document.querySelector(".hamburger-menu");

const mobile = document.querySelector(".header-container");

const appearNav = document.querySelector(".mobile-nav");

const appearMenu = document.querySelector(".main-menu");

menuIcon.addEventListener("click", () => {
  mobile.classList.toggle('change');
  appearNav.classList.toggle('mobile-nav-active');
  appearMenu.classList.toggle('mobile-menu-active');
});






window.onscroll = function() {
  stickOnScroll()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function stickOnScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// SOURCE: https://github.com/kevin-powell/slide-in-with-intersection-observer //

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
