import './style.css';

const list = document.querySelector('.list-container');
const listData = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'complete to Do list',
    completed: false,
    index: 0,
  },
  {
    description: 'read for exam',
    completed: false,
    index: 0,
  },
];

listData.forEach((task) => {
  const { description, index } = task;
  list.innerHTML += `
  <li class="task">
  <input type="checkbox" id="${index}" name="task"/><del>${description}</del>
  </li>
  <hr class="list-line"/>
  `;
});
