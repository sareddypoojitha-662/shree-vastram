// Hero Background Slider (Run only if .hero-overlay exists)
const heroOverlay = document.querySelector('.hero-overlay');

if (heroOverlay) {
  const images = [
    'https://wallpaperbat.com/img/518109-free-download-fashion-wallpaper-qygjxz-1600x1200-for-your-desktop-mobile-tablet-explore-fashion-background-fashion-background-fashion-wallpaper-fashion-background.jpg',
    'https://img.freepik.com/premium-photo/designer-sarees-diwali-background_962764-24913.jpg',
    'https://images.unsplash.com/photo-1722410180644-5955f83ec8b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
  ];

  let current = 0;

  function changeBackground() {
    heroOverlay.style.backgroundImage = `url(${images[current]})`;
    current = (current + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 3000);
}

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("toggle");
  });
}

// Scroll effect for navbar
const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}
