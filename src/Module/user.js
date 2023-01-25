import { display } from './ui.js';
import { loadData, saveData } from './storage.js';
import { addTask, removeTask } from './edit.js';

const refreshIcon = document.querySelector('.refresh');
const addBtn = document.querySelector('.add-btn');
const newTask = document.querySelector('.list-input');
const list = document.querySelector('.list-container');

addBtn.addEventListener('click', () => {
  if (newTask.value) {
    saveData(addTask(newTask.value, loadData()));
    newTask.value = '';
    display(loadData());
  }
});

list.addEventListener('click', (trashBtn) => {
  if (trashBtn.target.closest('.trash-btn')) {
    const trashIcon = trashBtn.target.closest('.trash-btn');
    saveData(removeTask(trashIcon, loadData()));
    display(loadData());
  }
});

refreshIcon.addEventListener('click', () => {
  saveData([]);
  display(loadData());
});

window.addEventListener('load', () => {
  if (localStorage.getItem('tasks')) {
    display(loadData());
  }
});
