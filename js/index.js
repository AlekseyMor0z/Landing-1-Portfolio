
import i18Obj from './translate.js';

console.log(`Total: 70/85`);

/*--------------Burger start-----------*/
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
/*--------------Burger end-----------*/

/*--------------Portfolio btn start-----------*/
const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioBtnA = document.querySelector('.portfolio-btn-first');
const portfolioBtnB = document.querySelector('.portfolio-btn-second');
const portfolioBtnC = document.querySelector('.portfolio-btn-third');
const portfolioBtnD = document.querySelector('.portfolio-btn-fouth');
const portfolioImages = document.querySelectorAll('.portfolio-image');


// portfolio-btn.forEach(element => (event) {
//   if (event.targer.textContent === "")
// });
const changeImages = (event) => {
  if (event.target.classList.contains('portfolio-btn')) {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    if (event.target.dataset.season === "winter") {
      portfolioBtnA.classList.add('portfolio-btn-hover');
      portfolioBtnB.classList.remove('portfolio-btn-hover');
      portfolioBtnC.classList.remove('portfolio-btn-hover');
      portfolioBtnD.classList.remove('portfolio-btn-hover');
    }
    if (event.target.dataset.season === "spring") {
      portfolioBtnB.classList.add('portfolio-btn-hover');
      portfolioBtnA.classList.remove('portfolio-btn-hover');
      portfolioBtnC.classList.remove('portfolio-btn-hover');
      portfolioBtnD.classList.remove('portfolio-btn-hover');
    }
    if (event.target.dataset.season === "summer") {
      portfolioBtnC.classList.add('portfolio-btn-hover');
      portfolioBtnA.classList.remove('portfolio-btn-hover');
      portfolioBtnB.classList.remove('portfolio-btn-hover');
      portfolioBtnD.classList.remove('portfolio-btn-hover');
    }
    if (event.target.dataset.season === "autumn") {
      portfolioBtnD.classList.add('portfolio-btn-hover');
      portfolioBtnA.classList.remove('portfolio-btn-hover');
      portfolioBtnB.classList.remove('portfolio-btn-hover');
      portfolioBtnC.classList.remove('portfolio-btn-hover');
    }
  }
} 

portfolioBtns.forEach(element => {
  element.addEventListener('click', changeImages);
});

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

/*--------------Portfolio btn end-----------*/

/*--------------Translate start-----------*/

const english = document.querySelector('.english');
const russian = document.querySelector('.russian');
const lang = document.querySelectorAll('[data-i18]');



english.addEventListener('click', getTranslateEn);

function getTranslateEn(en) {
  lang.forEach(el => {
    el.textContent = i18Obj ['en'][el.dataset.i18]; 
    english.classList.add('nav-link-lng-active');
    russian.classList.remove('nav-link-lng-active');    
  });    
}

russian.addEventListener('click', getTranslateRu);

  function getTranslateRu(ru) {
    lang.forEach(el => {
      el.textContent = i18Obj ['ru'][el.dataset.i18];  
      russian.classList.add('nav-link-lng-active');
      english.classList.remove('nav-link-lng-active');   
    });    
  }

  /*--------------Translate end-----------*/

  /*--------------Theme start-----------*/



  const themeBtn = document.querySelector('.theme');
  const titleChange = document.querySelectorAll('.general-title');
  const titleText = document.querySelectorAll('.title-text');
  const backGroundImg1 = document.querySelector('.header-container');
  const backGroundImg2 = document.querySelector('.hero-container');
  const logo = document.querySelector('.logo');
  const socialList = document.querySelectorAll('.social-item');
  const sectionContacts = document.querySelector('.section-contacts');
  const navActive = document.querySelector('.nav');
  const lngActiveLight = document.querySelectorAll('.nav-link-lng');
  const contactsText = document.querySelector('.contacts-container');
  const contactsInput = document.querySelectorAll('.contacts-input');
  const portfolioBtn = document.querySelectorAll('.portfolio-btn');
  const light = ['body', '.btn-hero', '.contacts-btn'];
  let initialTheme = true;



  function getTheme() {
  const root = document.documentElement;
  light.forEach(element => {
    document.querySelector(element).classList.toggle('light-theme'); 
  });
    themeBtn.classList.toggle('theme-active');
    titleChange.forEach(el => {
      el.classList.toggle('general-title-active');
    })

    titleText.forEach(el => {
      el.classList.toggle('title-text-active');
    })
    
    if(initialTheme) {
      root.style.setProperty('--color-white', '#000');
      initialTheme = false;  
    } else {
      root.style.setProperty('--color-white', '#fff');
      initialTheme = true;
    }

    backGroundImg1.classList.toggle('header-container-active');
    backGroundImg2.classList.toggle('hero-container-active');
    logo.classList.toggle('logo-active');

    socialList.forEach(el => {
      el.classList.toggle('social-item-active');
    });

    sectionContacts.classList.toggle('section-contacts-active');
    navActive.classList.toggle('nav-active');
    lngActiveLight.forEach(el => {
      el.classList.toggle('nav-link-lng-light');
    })
    contactsText.classList.toggle('contacts-container-light');
    contactsInput.forEach(element => {
      element.classList.toggle('contacts-input-light');
    });
    portfolioBtn.forEach(element => {
      element.classList.toggle('portfolio-btn-light');
    });
}

themeBtn.addEventListener('click', getTheme);

    /*--------------Theme end-----------*/

    /*--------------Local storage end-----------*/
  // let lang = 'en';
  // let theme = 'dark';

  //   function setLocalStorage() {
  //     localStorage.setItem('lang', lang);
  //   }
  //   window.addEventListener('beforeunload', setLocalStorage)

  //   function getLocalStorage() {
  //     if(localStorage.getItem('lang')) {
  //       const lang = localStorage.getItem('lang');
  //       getTranslate(lang);
  //     }
  //   }
  //   window.addEventListener('load', getLocalStorage)

    // function setLocalStorage() {
    //   localStorage.setItem('theme', theme);
    // }
    // window.addEventListener('beforeunload', setLocalStorage)

    // function getLocalStorage() {
    //   if(localStorage.getItem('theme')) {
    //     const lang = localStorage.getItem('theme');
    //     getTranslate(lang);
    //   }
    // }
    // window.addEventListener('load', getLocalStorage)
    /*--------------Local storage end-----------*/

    // const btnHero = document.querySelector('.btn-hero');

    // btnHero.addEventListener('click', function (e) {
    //   const x = e.clientX;
    //   const y = e.clientY;
    
    //   const buttonTop = e.target.offsetTop;
    //   const buttonLeft = e.target.offsetLeft;
    
    //   const xInside = x - buttonLeft;
    //   const yInside = y - buttonTop;
    
    //   const circle = document.createElement('span')
    //   circle.classList.add('circle')
    //   circle.style.top = yInside + 'px'
    //   circle.style.left = xInside + 'px'
    
    //   this.appendChild(circle)
    
    //   setTimeout(() => circle.remove(), 500)
    // })

    // -----------------Video player Start-----------------

    const player = document.querySelector('.video-player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress-filled');
    const toggle = player.querySelector('.toggle');
    const ranges = player.querySelectorAll('.player-slider'); 
    const playBtn = player.querySelector('.video-btn-upper');
    const muteBtn = player.querySelector('.sounds-btn');
    

    let progression;

    function togglePlay() {
      if (video.paused) {
        video.play();
        playBtn.style.backgroundImage = "url('./assets/svg/pause.svg')";
        handleProgress();
        progression = window.setInterval(handleProgress, 200);
      } else {
        video.pause();
        playBtn.style.backgroundImage = "url('./assets/svg/play.svg')";

        clearInterval(progression);
      }
    }

    function muteVideo(event) {
      if (video.muted === false) {
        video.muted = true;
      } else {
        video.muted = false;
      }
      muteBtn.classList.toggle('sounds-btn-muted');
    }


    function updateButton() {
      if (this.paused) {
        toggle.style.display='flex';
      } else {
        toggle.style.display='none';

      }
    }

    function handleRangeUpdate() {
      video[this.name] = this.value;
      console.log(this.name);
      console.log(this.value);
    }

    function handleProgress() {
      const percent = (video.currentTime / video.duration) * 100;
      progressBar.style.flexBasis = `${percent}%`;
    }

    function scrub(event) {
      const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
      video.currentTime = scrubTime;
    }


    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    muteBtn.addEventListener('click', muteVideo);
    // video.addEventListener('timeupdate', handleProgress);

    playBtn.addEventListener('click', togglePlay);
    toggle.addEventListener('click', togglePlay);

    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

    progress.addEventListener('click', scrub);
    progress.addEventListener('click', scrub);
    // -----------------Video player End-----------------