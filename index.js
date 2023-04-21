console.log(`The layout matches to the layout. Screen width 768px: 48/48; (some pixel mistakes in switch-lng and video photo)
No horizontal scroll bar appears up to and including 320px. Content: it is not cropped or deleted: 15/15;
Adaptive menus are implemented on screen widths of 768px and smaller: 22/22.
Total: 85/85`);
let burgerMenu = document.querySelector('.header-burger');
let nav = document.querySelector('.nav');
let items = document.querySelectorAll('.nav-link');
burgerMenu.onclick = function() {
    nav.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  };
  items.forEach(item => {
    item.onclick = function() {
        nav.classList.remove('active');
        burgerMenu.classList.remove('active');
    }
}); 


const portfolioBtnA = document.querySelector('.portfolio-btn-first');
const portfolioBtnB = document.querySelector('.portfolio-btn-second');
const portfolioBtnC = document.querySelector('.portfolio-btn-third');
const portfolioBtnD = document.querySelector('.portfolio-btn-fouth');
const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtnA.addEventListener('click', () => {
      portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
      portfolioBtnA.classList.add('portfolio-btn-hover');
      portfolioBtnB.classList.remove('portfolio-btn-hover');
      portfolioBtnC.classList.remove('portfolio-btn-hover');
      portfolioBtnD.classList.remove('portfolio-btn-hover');
  }
);
portfolioBtnB.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
  portfolioBtnB.classList.add('portfolio-btn-hover');
  portfolioBtnA.classList.remove('portfolio-btn-hover');
  portfolioBtnC.classList.remove('portfolio-btn-hover');
  portfolioBtnD.classList.remove('portfolio-btn-hover');
}
);
portfolioBtnC.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
  portfolioBtnC.classList.add('portfolio-btn-hover');
  portfolioBtnA.classList.remove('portfolio-btn-hover');
  portfolioBtnB.classList.remove('portfolio-btn-hover');
  portfolioBtnD.classList.remove('portfolio-btn-hover');
}
);
portfolioBtnD.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
  portfolioBtnD.classList.add('portfolio-btn-hover');
  portfolioBtnA.classList.remove('portfolio-btn-hover');
  portfolioBtnB.classList.remove('portfolio-btn-hover');
  portfolioBtnC.classList.remove('portfolio-btn-hover');
}
);

function preloadSummerImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/summer/${i}.jpg`;
  }
}
preloadSummerImages();

function preloadAutumnImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/autumn/${i}.jpg`;
  }
}
preloadAutumnImages();

function preloadSpringImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/spring/${i}.jpg`;
  }
}
preloadSpringImages();

function preloadWinterImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/winter/${i}.jpg`;
  }
}
preloadWinterImages();

