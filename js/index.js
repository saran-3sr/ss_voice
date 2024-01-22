var acc = document.getElementsByClassName("fourthSection-accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    //this.classList.toggle("active");
    let buttonsymbol = this.querySelector(
      ".fourthSection-accordion-btn-symbol"
    );
    console.log(buttonsymbol);
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      buttonsymbol.innerHTML = "+";
    } else {
      panel.style.display = "block";
      buttonsymbol.innerHTML = "-";
    }
  });
}

var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "1",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
