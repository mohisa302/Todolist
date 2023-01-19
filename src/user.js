import { listData } from './tasks';
import { display } from './ui';

const refreshIcon = document.querySelector('.refresh');
const addBtn = document.querySelector('.add-btn');
const newTask = document.querySelector('.list-input');
const clearCom = document.querySelector('.complete-btn');

export const addTask = (task) => {
  if (!listData) {
    listData = [
      {
        description: task,
        completed: false,
        index: 0,
      },
    ];
  } else {
    listData.push({
      description: task,
      completed: false,
      index: listData.length,
    });
  }
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

clearCom.addEventListener('click', () => {
  if (listData) {
    listData = listData.filter((task) => !task.completed);
  }
  listData.forEach((taskDay, indexDay) => {
    taskDay.index = indexDay;
  });
  localStorage.setItem('tasks', JSON.stringify(listData));
  display();
});
