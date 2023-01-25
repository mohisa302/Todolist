import { display } from './ui.js';
import { saveData, loadData } from './storage.js';
import { clearAll } from './update.js';
const clearCom = document.querySelector('.complete-btn');

clearCom.addEventListener('click', () => {
  saveData(clearAll(loadData()));
  display(loadData());
});
