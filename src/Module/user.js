import display from './ui.js';
import addTask from './edit.js';
import { saveStorage, loadStorage } from './storage.js';

const refreshIcon = document.querySelector('.refresh');
const addBtn = document.querySelector('.add-btn');
const newTask = document.querySelector('.list-input');

addBtn.addEventListener('click', () => {
  if (newTask.value) {
    saveStorage(addTask(newTask.value, loadStorage()));
    display(loadStorage());
  }

  newTask.value = '';
  display(loadStorage());
});

refreshIcon.addEventListener('click', () => {
  const listData = [];
  saveStorage(listData);
  display(loadStorage());
});

window.addEventListener('load', () => {
  if (loadStorage()) {
    display(loadStorage());
  }
});
