import './style.css';
import display from './ui.js';
import './user.js';
import listData from './tasks.js';

window.addEventListener('load', () => {
  if (localStorage.getItem('tasks')) {
    listData = JSON.parse(localStorage.getItem('tasks'));
  }
  display();
});

document.addEventListener('DOMContentLoaded', display);
