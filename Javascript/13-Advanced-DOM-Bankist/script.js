'use strict';

///////////////////////////////////////
// Modal window (Open Account Button)
//////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//  Removing hidden class from HTML to make visible of Overlay
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//  adding hidden class to HTML to disable the  Overlay
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//  Opening when Click
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

//Closing when Click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// Closing when clicking Esc button
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////
// Scrolling
////////////////////////////////////
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    console.log('Inside If');
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////
// Operations
////////////////////////////////////
const tab = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;
  // Remove active class
  tab.forEach(t => t.classList.remove('operations__tab--active'));
  tabContent.forEach(con =>
    con.classList.remove('operations__content--active')
  );

  // Active tab
  clicked.classList.add('operations__tab--active');
  // Active Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////
// mouse over fadding
////////////////////////////////////
const nav = document.querySelector('.nav');
const fadding = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = document.querySelector('img');

    siblings.forEach(o => {
      if (link !== o) o.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', fadding.bind(0.5));

nav.addEventListener('mouseout', fadding.bind(1));

//////////////////////////////////
// Sticky
////////////////////////////////////
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//////////////////////////////////
// Reveal Section
////////////////////////////////////
const sections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

sections.forEach(el => {
  el.classList.add('section--hidden');
  sectionObserver.observe(el);
});

//////////////////////////////////
// lazy load img
////////////////////////////////////
const imgTarget = document.querySelectorAll('img[data-src]');
const lazyImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};
const lazyObserver = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTarget.forEach(img => {
  lazyObserver.observe(img);
});

//////////////////////////////////
// scroll quotes
////////////////////////////////////
const slider = function () {
  const slide = document.querySelectorAll('.slide');
  // const slider = document.querySelector('.slider');
  const rightArr = document.querySelector('.slider__btn--right');
  const leftArr = document.querySelector('.slider__btn--left');
  let curSlide = 0;
  // slider.style.overflow = 'visible';
  // slider.style.scale = 0.4;
  const maxSlide = slide.length - 1;

  const translate = function (sl) {
    slide.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - sl)}%)`;
    });
  };
  translate(curSlide);
  const nextSlide = function () {
    if (curSlide === maxSlide) curSlide = 0;
    else curSlide++;
    translate(curSlide);
    activeDot(curSlide);
  };
  const preSlide = function () {
    if (curSlide === 0) curSlide = maxSlide;
    else curSlide--;
    translate(curSlide);
    activeDot(curSlide);
  };
  // Dots
  const dots = document.querySelector('.dots');
  const dotContainer = function () {
    slide.forEach((_, i) => {
      dots.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  dotContainer();
  const activeDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  activeDot(0);

  rightArr.addEventListener('click', nextSlide);
  leftArr.addEventListener('click', preSlide);
  document.addEventListener('keydown', function (e) {
    console.log();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') preSlide();
  });
  dots.addEventListener('click', function (e) {
    const { slide } = e.target.dataset;
    translate(slide);
    activeDot(slide);
  });
};

slider();
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();

//   // Matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

/*
// ///////////////////////////////////////////////////////////
// Selecting Element
///////////////////////////////////////////////////////////////
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

const header = document.querySelector('.header');
console.log(document.querySelectorAll('.section'));

console.log(document.getElementById('section--1'));
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByClassName('btn'));

////////////////////////////////
//Creating and inserting elements
////////////////////////////////////
const message = document.createElement('div'); // new div tag is created
message.classList.add('cookie-message'); // new class is added to that div tag
//message.textContent='Hi' // this will use to set only string content, so we use innerHTML so we can add other tags too
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close--cookie">Got it!</button>';
// header.append(message); //  cannot be at 2 places same time
// header.prepend(message); // so lastly called part will be applied

// header.append(message.cloneNode(true)); // Method to apper in both places

header.before(message); //entirely before header tag
header.after(message); // entirely after header tag

// Delete element
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });
*/
