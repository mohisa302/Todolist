import display from './ui.js';
import { saveStorage, loadStorage } from './storage.js';

const clearCom = document.querySelector('.complete-btn');

clearCom.addEventListener('click', () => {
  let listData = loadStorage();
  if (listData) {
    listData = listData.filter((task) => !task.completed);
  }
  listData.forEach((taskDay, indexDay) => {
    taskDay.index = indexDay + 1;
  });
  saveStorage(listData);
  display();
});
