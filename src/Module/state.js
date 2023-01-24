import display from './ui.js';
import { saveData, loadData } from './storage.js';

const clearCom = document.querySelector('.complete-btn');

clearCom.addEventListener('click', () => {
  let listData = loadData();
  if (listData) {
    listData = listData.filter((task) => !task.completed);
  }
  listData.forEach((taskDay, indexDay) => {
    taskDay.index = indexDay + 1;
  });
  saveData(listData);
  display(loadData());
});
