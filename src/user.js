import { listData } from './tasks';
import { display } from './ui';

export const editBtn = document.querySelector('.edit-icon');
const refreshIcon = document.querySelector('.refresh');
const addBtn = document.querySelector('.add-btn');
const newTask = document.querySelector('.list-input');

export const addTask = (task) => {
  listData.push({
    description: task,
    completed: false,
    index: listData.length,
  });
  localStorage.setItem('tasks', JSON.stringify(listData));
};

addBtn.addEventListener('click', () => {
  if (newTask.value) addTask(newTask.value);
  newTask.value = '';
  display();
});

refreshIcon.addEventListener('click', () => {
  listData = [];
  localStorage.setItem('tasks', JSON.stringify(listData));
  display();
});
