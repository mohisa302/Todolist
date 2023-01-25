/**
 * @jest-environment jsdom
 */
import { addTask, removeTask } from './edit.js';
import { saveData, loadData } from './storage.js';
import { addTaskElement } from './ui.js';

let listData = [];
describe('test addTaskItem and LocalStorage', () => {
  //             *********** Test 1-6 ***********
  //                Add and Remove functionality
  test('add task to show arrTask.tasks length 1', () => {
    listData = addTask('wash the dishes', loadData());
    expect(listData).toHaveLength(1);
  });

  test('add task to show li added to ul', () => {
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const list = document.querySelector('.list-container');
    listData = addTask('wash the dishes', loadData());
    addTaskElement('wash the dishes', list);
    const li = document.querySelectorAll('.task-container');
    expect(li).toHaveLength(1);
  });

  test('check localStorage after add task', () => {
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const list = document.querySelector('.list-container');
    addTask('clean home', loadData()); // add array element
    addTaskElement('clean home', list); // add html element
    saveData(listData);
    expect(loadData()).toHaveLength(1);
  });

  test('check remove item from array', () => {
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const list = document.querySelector('.list-container');
    addTask('clean home', loadData());
    addTaskElement('clean home', list);
    const trash = document.querySelector('.trash-btn');
    removeTask(trash, listData);
    expect(listData).toHaveLength(0);
  });

  test('check remove item from localStorage', () => {
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const list = document.querySelector('.list-container');
    saveData(addTask('clean home', loadData()));
    addTaskElement('clean home', list);
    const trash = document.querySelector('.trash-btn');
    saveData(removeTask(trash, listData));
    expect(loadData()).toHaveLength(0);
  });

  test('check remove html element', () => {
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const list = document.querySelector('.list-container');
    addTask('clean home', loadData());
    addTaskElement('clean home', list);
    const trash = document.querySelector('.trash-btn');
    removeTask(trash, listData);
    const li = document.querySelectorAll('.task-container');
    expect(li).toHaveLength(0);
  });
  //             *********** Test 6-6 ***********
  //                       Data updatation
});
