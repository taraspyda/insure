import './scss/style.scss';

const { body } = document;
const burger = body.querySelector('.burger');
const line = burger.querySelector('.burger__line');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  line.classList.toggle('burger__line--active');
});
