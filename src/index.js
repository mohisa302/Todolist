import './style.css';
import { listData } from './tasks';

const list = document.querySelector('.list-container');
const form = document.querySelector('.form-container');

listData.forEach((task, listIndex) => {
  const { description, index } = task;
  list.innerHTML += `
  <li class="task">
  <input type="checkbox" id="${index}" class="check-box" name="task"/><del>${description}</del>
  </li>
  <hr class="list-line"/>
  `;
  if (listIndex === listData.length - 1)
    form.innerHTML +=
      '<button class="complete-btn">Clear all completed</button>';
});
