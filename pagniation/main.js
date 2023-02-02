
const btnContainer = document.querySelector('.btn-container');
const container = document.querySelector('.container');

const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `
    <button class="page-btn ${
      activeIndex === pageIndex ? 'active-btn' : 'null'
    }" data-index="${pageIndex}">
      ${pageIndex + 1}
    </button>`;
  });
  console.log(btns);
  btns.push(`<button class="next-btn">next</button>`);
  btns.unshift(`<button class="prev-btn">prev</button>`);
  container.innerHTML = btns.join('');
};




const displayFollowers= (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { avatar_url, login, html_url } = person;
      return `
       <article class='card'>
         <img src="${avatar_url}" alt='person' />
           <h4>${login}</h4>
         <a href="${html_url}" class="btn">view profile</a>
       </article>
       `;
    })
    .join('');
  container.innerHTML = newFollowers;
};



const url = 'https://api.github.com/users/jojoldu/followers?per_page=100';

const fetchFollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};


const paginate = (followers) => {
  const itemsPerPage = 10;
  // numberOfPages = 100 / 10
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    console.log('numberOfPages', numberOfPages);
    console.log('length', length);
    const start = index * itemsPerPage;
    console.log('start', start);
    console.log(`${start}+${itemsPerPage}`);
    return followers.slice(start, start + itemsPerPage);
  });
  console.log('newFollowers', newFollowers);
  return newFollowers;
};


let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const init = async () => {
  const followers = await fetchFollowers();
  pages = paginate(followers);
  console.log('pages', pages);
  setupUI();
};

btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-container')) return;

  if (e.target.classList.contains('page-btn')) {
    index = Number(e.target.dataset.index);
  }

  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});

window.addEventListener('DOMContentLoaded', init);


