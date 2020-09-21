let position = 0;
let temp = 1;
const count = document.getElementById('current');
const slidesToShow = 1;
const slidesToScroll = 1;

const container = document.querySelector('.slider__wrap');
const track = document.querySelector('.slider__list');
const items = document.querySelectorAll('.slider__item');
const itemsCount = items.length;
const btnPrev = document.querySelector('.button--prev');
const btnNext = document.querySelector('.button--next');
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToShow * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
})

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`
}

const checkBtn = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtn();
  count.innerText = temp -= 1;
})
btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= movePosition >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtn();
  count.innerText = temp += 1;
})

checkBtn();