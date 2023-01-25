import { loadData, saveData } from './storage.js';

export const addTaskElement = (description, list) => {
  list.innerHTML += `
  <li class="task-container" draggable="true">
  <div class="task">
  <div class="task-text">
  <input type="checkbox" class="check-box" name="task"/><del class="input-text" contenteditable="false">${description}</del>
  </div>
  <div class="edit-icon "></div>
  <i class="trash trash-btn fa fa-trash" aria-hidden="true"></i>
  </div>
  <hr class="list-line" />
  </li>
  `;
};

export const display = (listData) => {
  const list = document.querySelector('.list-container');
  list.innerHTML = '';
  if (listData.length > 0) {
    listData.forEach((task) => {
      const { description } = task;
      addTaskElement(description, list);
      const tasks = document.querySelectorAll('.task-container');
      const inputTexts = document.querySelectorAll('.input-text');
      const editBtns = document.querySelectorAll('.edit-icon');
      const trashBtns = document.querySelectorAll('.trash-btn');
      const checkBoxes = document.querySelectorAll('input[type=checkbox]');

      editBtns.forEach((editBtn, index) => {
        editBtn.addEventListener('click', () => {
          editBtn.classList.add('hide');
          tasks[index].classList.add('edit-mode');
          trashBtns[index].classList.remove('trash');
          inputTexts[index].contentEditable = 'true';
          inputTexts[index].setAttribute('contenteditable', 'true');
          saveData(listData);
        });
      });

      inputTexts.forEach((inputText, index) => {
        inputText.addEventListener(
          'input',
          () => {
            listData[index].description = inputText.textContent;
            saveData(listData);
          },
          false
        );
      });

      checkBoxes.forEach((checkBox, index) => {
        if (listData[index].completed === true) {
          checkBox.checked = true;
          inputTexts[index].previousElementSibling.disabled = true;
        }

        checkBox.addEventListener('change', () => {
          listData[index].completed = true;
          inputTexts[index].disabled = true;
          inputTexts[index].previousElementSibling.disabled = true;
          saveData(listData);
        });
      });
    });
  }
};

export const drag = (e, list) => {
  const underDrag = e.target.closest('.task-container');
  const draggable = document.querySelector('.dragging');
  if (underDrag.nextElementSibling === null) {
    underDrag.parentNode.insertBefore(draggable, underDrag.nextSibling);
    list.appendChild(draggable);
  } else {
    underDrag.parentNode.insertBefore(draggable, underDrag);
  }
  const allTask = document.querySelectorAll('.input-text');
  console.log(allTask);
  return dataRef(allTask);
};

const dataRef = (tasks) => {
  let listData = [];
  tasks.forEach((task, index) => {
    listData.push({
      description: task.textContent,
      completed: task.parentNode.checked,
      index: index + 1,
    });
  });
  return listData;
};
