import addTask from './edit.js';
import JSDOMEnvironment, { TestEnvironment } from 'jest-environment-jsdom';
import { loadStorage } from './storage.js';
import './localStorage.js';
describe('check add-remove', () => {
  test('add li elements', () => {
    const description = 'wash the dishes';
    addTask(description, loadStorage());
    const taskContainer = document.querySelector('.task-container');
    expect(taskContainer.children.length).toBeGreaterThan(1);
  });
});
