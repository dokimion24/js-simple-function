class Item {
  constructor(title, img) {
    this.title = title;
    this.img = img;
  }

  render() {
    const itemEl = document.createElement('div');
    itemEl.className = 'item';
    itemEl.innerHTML = `
      <img src="${this.img}"></div>
      <h3>${this.title}</h3>
    `;
    return itemEl;
  }
}

class ItemList {
  items = [
    new Item(
      'work01',
      'https://images.pexels.com/photos/10627367/pexels-photo-10627367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Item(
      'work02',
      'https://images.pexels.com/photos/5644294/pexels-photo-5644294.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load0'
    ),
    new Item(
      'work03',
      'https://images.pexels.com/photos/13855927/pexels-photo-13855927.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
    ),
    new Item(
      'work04',
      'https://images.pexels.com/photos/14922898/pexels-photo-14922898.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
    ),
    new Item(
      'work05',
      'https://images.pexels.com/photos/6827532/pexels-photo-6827532.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
    ),
    new Item(
      'work06',
      'https://images.pexels.com/photos/14842049/pexels-photo-14842049.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
    ),
  ];

  render() {
    const slideContainer = document.createElement('div');
    slideContainer.className = 'slide-container';

    const itemList = document.createElement('div');
    itemList.className = 'items';
    for (const item of this.items) {
      const itemEl = item.render();
      itemList.append(itemEl);
    }
    slideContainer.append(itemList);
    return slideContainer;
  }

  slide() {
    slideContainer.addEventListener('mousedown', (e) => {
      isPressedDown = true;
      cursorXSpace = e.offsetX - cards.offsetLeft;
      slideContainer.style.cursor = 'grabbing';
    });

    slideContainer.addEventListener('mouseup', () => {
      slideContainer.style.cursor = 'grab';
    });

    slideContainer.addEventListener('mousemove', (e) => {
      if (!isPressedDown) return;
      e.preventDefault();
      cards.style.left = `${e.offsetX - cursorXSpace}px`;
    });
  }
}

class App {
  static init() {
    const renderHook = document.querySelector('#app');
    const itemList = new ItemList();
    itemList.slide();
    const itemListEl = itemList.render();

    renderHook.append(itemListEl);
  }
}

App.init();
