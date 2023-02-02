const container = document.querySelector('.container');
const cards = document.querySelector('.items');

let isPressedDown = false;

let cursorXSpace;

container.addEventListener('mousedown', (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = 'grabbing';
});

container.addEventListener('mouseup', () => {
  container.style.cursor = 'grab';
  isPressedDown = false;
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

  console.log(cards_rect.right, container_rect.right);

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  }
  if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}
