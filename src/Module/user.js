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
  const underDrag = e.target.closest('.task-container');
  const allTask = document.querySelectorAll('draggable:not(.dragging');
  const draggable = document.querySelector('.dragging');
  if (underDrag.nextElementSibling === null) {
    underDrag.parentNode.insertBefore(draggable, underDrag.nextSibling);
    list.appendChild(draggable);
  } else {
    underDrag.parentNode.insertBefore(draggable, underDrag);
  }
  // console.log(draggable);
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
