/* Вызов полифилла для внешнего спрайта */
svg4everybody();

/*main__nav close&open*/
var navMain = document.querySelector('.main-nav');
var navToggle = navMain.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
