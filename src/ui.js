import { indexOf } from 'lodash';
import { listData } from './tasks';

export const display = () => {
  const list = document.querySelector('.list-container');
  list.innerHTML = '';
  listData.forEach((task, listIndex) => {
    const { description, index } = task;
    list.innerHTML += `
    <li class="task-container edit-mode">
    <div class="task">
    <div class="task-text">
    <input type="checkbox" id="${index}" class="check-box" contenteditable name="task"/><del class="input-text" contenteditable="false">${description}</del>
    </div>
    <div class="edit-icon"></div>
    <i class="trash trash-btn fa fa-trash" aria-hidden="true"></i>
    </div>
    <hr class="list-line" />
    </li>
    `;
    const inputTexts = document.querySelectorAll('.input-text');
    const editBtns = document.querySelectorAll('.edit-icon');
    let trashBtns = document.querySelectorAll('.trash-btn');

    editBtns.forEach((editBtn, index) => {
      editBtn.addEventListener('click', () => {
        editBtn.classList.add('hide');
        trashBtns[index].classList.remove('trash');
        inputTexts[index].contentEditable = 'true';
        inputTexts[index].setAttribute('contenteditable', 'true');
      });
    });

    inputTexts.forEach((inputText, index) => {
      inputText.addEventListener(
        'input',
        () => {
          listData[index].description = inputText.textContent;
          // localStorage.setItem('tasks', JSON.stringify(listData));
        },
        false
      );
    });

    trashBtns.forEach((trashBtn, index) => {
      trashBtn.addEventListener('click', () => {
        const indexRem = listData.findIndex(
          (task) => task.description === inputTexts[index].textContent
        );
        listData.splice(indexRem, 1);
        localStorage.setItem('tasks', JSON.stringify(listData));
        trashBtn.parentNode.parentNode.remove();
      });
      trashBtns = document.querySelectorAll('.trash-btn');
    });
  });
};
