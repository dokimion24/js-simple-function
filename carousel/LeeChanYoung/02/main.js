const container = document.querySelector('.container');
const cards = document.querySelector('.cards');

let isPressedDown = false;

let cursorXSpace;

container.addEventListener('mousedown', (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = 'grabbing';
});

container.addEventListener('mouseup', () => {
  container.style.cursor = 'grab';
});



container.addEventListener('mousemove', (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right - 10) {
    cards.style.left = `0px`;
  }
}

setInterval(() => {
  cards.style.left = `${container.clientWidth}`;
}, 1000);
