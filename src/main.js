import './scss/style.scss';

const { body } = document;
const burger = body.querySelector('.burger');
const burgerLine = burger.querySelector('.burger__line');
const menu = body.querySelector('.page__menu');

let menuIsOpened = false;

burger.addEventListener('click', () => {

  if (!menuIsOpened) {
    menuIsOpened = true;
    burger.classList.add('burger--active');
    burgerLine.classList.add('burger__line--active');
    menu.classList.add('page__menu--active');
    body.style.overflow = 'hidden';

    return;
  }

  menuIsOpened = false;
  burger.classList.remove('burger--active');
  burgerLine.classList.remove('burger__line--active');
  menu.classList.remove('page__menu--active');
  body.style.overflow = '';
});
