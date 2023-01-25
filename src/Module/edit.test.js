/**
 * @jest-environment jsdom
 */
import { addTask, removeTask } from './edit.js';
import { saveData, loadData } from './storage.js';
import { addTaskElement, drag } from './ui.js';
import { clearAll, editText, statusTask } from './update.js';

let listData = [];
describe('test addTaskItem and LocalStorage', () => {
  //* *************************** Test 1-6 *************************************
  //                    Add and Remove functionality

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

  //* *************************** Test 6-12 *************************************
  //                           Data updatation

  test('check after removing, content in HTML element && localStorage is updated', () => {
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const list = document.querySelector('.list-container');
    // add first element
    saveData(addTask('clean home', loadData()));
    addTaskElement('clean home', list);
    saveData(addTask('wash the dishes', loadData()));
    addTaskElement('wash the dishes', list);
    // remove first item
    const trash = document.querySelectorAll('.trash-btn');
    saveData(removeTask(trash[0], loadData()));
    expect(loadData()[0].index).toBe(1);
  });

  test('check after checkbox is checked the localStorage is updated', () => {
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const list = document.querySelector('.list-container');
    // add element
    saveData(addTask('clean home', loadData()));
    addTaskElement('clean home', list);
    // mock checkbox DOM element
    document.querySelector('.check-box').checked = true;
    const child = document.querySelector('.task-container');
    saveData(statusTask(loadData(), list, child));
    expect(loadData()[0].completed).toBe(true);
  });

  test('check after change the order of the list with drag-drup, localStorage is updated(PART1)', () => {
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const list = document.querySelector('.list-container');
    // add first element
    saveData(addTask('clean home', loadData()));
    addTaskElement('clean home', list);
    saveData(addTask('wash the dishes', loadData()));
    addTaskElement('wash the dishes', list);
    // put first element in drag state
    document.querySelector('.task-container').classList.add('dragging');
    // give another element
    const underdrag = document.querySelector('.task-container:not(.dragging)');
    saveData(drag(underdrag, list));
    expect(loadData()[0].description).toBe('wash the dishes');
  });

  test('check after change the order of the list with drag-drup, localStorage is updated(PART2)', () => {
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const list = document.querySelector('.list-container');
    // add first element
    saveData(addTask('clean home', loadData()));
    addTaskElement('clean home', list);
    saveData(addTask('wash the dishes', loadData()));
    addTaskElement('wash the dishes', list);
    // put first element in drag state
    document.querySelector('.task-container').classList.add('dragging');
    // give another element
    const underdrag = document.querySelector('.task-container:not(.dragging)');
    saveData(drag(underdrag, list));
    expect(loadData()[0].index).toBe(1);
  });

  test('check after clearCompleted, localStorage is updated', () => {
    // clear local storage
    saveData([]);
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const list = document.querySelector('.list-container');
    // add element
    saveData(addTask('clean home', loadData()));
    addTaskElement('clean home', list);
    // mock checkbox DOM element
    document.querySelector('.check-box').checked = true;
    const child = document.querySelector('.task-container');
    saveData(statusTask(loadData(), list, child));
    saveData(clearAll(loadData()));
    const li = document.querySelector('.task-container');
    expect(loadData()).toHaveLength(0);
  });

  test('check after edit text, localStorage is updated', () => {
    document.body.innerHTML = '<ul class="list-container"></ul>';
    const list = document.querySelector('.list-container');
    // add element
    saveData(addTask('clean home', loadData()));
    addTaskElement('clean home', list);
    const child = document.querySelector('.task-container');
    saveData(editText(loadData(), list, child, 'wash the dishes'));
    expect(loadData()[0].description).toBe('wash the dishes');
  });
});
