let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function currentSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

// Auto-play
setInterval(nextSlide, 4000);

// Initial load
showSlide(slideIndex);
