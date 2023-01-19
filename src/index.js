import './style.css';
import { display } from './ui.js';
import './user';
import { listData } from './tasks';

window.addEventListener('load', () => {
  listData = JSON.parse(localStorage.getItem('tasks'));
  display();
});

document.addEventListener('DOMContentLoaded', display);
