import { display, drag } from './ui.js';
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

list.addEventListener('click', (e) => {
  if (e.target.closest('.trash-btn')) {
    const trashIcon = e.target.closest('.trash-btn');
    saveData(removeTask(trashIcon, loadData()));
    display(loadData());
  }
});

list.addEventListener('dragstart', (e) => {
  const listElem = e.target.closest('.task-container');
  listElem.classList.add('dragging');
});

list.addEventListener('dragend', (e) => {
  const listElem = e.target.closest('.task-container');
  listElem.classList.remove('dragging');
});

list.addEventListener('dragover', (e) => {
  e.preventDefault();
  saveData(drag(e, list));
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
